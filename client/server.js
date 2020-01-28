const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpush = require('web-push');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const port = process.env.PORT || 8000;

app.listen(port);
console.log('listening at port: %j', port);
app.use('/', express.static('./client/dist/okGinger'));
app.use(cors());
mongoose.connect('mongodb://admin:password1@ds211829.mlab.com:11829/okginger', {useNewUrlParser:true})

const PUBLIC_VAPID = "BCuCcwi7d9UNaoXug1-8NL3r4UqeqM8ROkH9iCnDDhSy1_Tz14aje0dOTlgkFoN00iwILEZ4-Bss3jHoWWnlhmY";
const PRIVATE_VAPID = "rWln4s7i27DWGTFgoqFrd8lb3njxJWSZoBV-PKD-dFs";

const Article = mongoose.model('Article', {
	date: Date,
	title: String,
	body: String,
	description: String,
	image: String,
	active: Boolean
});

const Subscription = mongoose.model('Subscription', {
	endpoint: String,
	expirationTime: String,
	keys: {
		p256dh: String,
		auth: String
	}
});

const User = mongoose.model('User', {
	email: String,
	password: String
})

webpush.setVapidDetails('mailto:sethtaylorblack@gmail.com', PUBLIC_VAPID, PRIVATE_VAPID);

app.post('/api/subscription', (req, res) => {
	var subscription = req.body;
	if(!subscription._id) subscription = new Subscription(subscription);
	return Subscription.findByIdAndUpdate(subscription._id, subscription, {upsert:true, new:true}).exec().then(r => res.json(r), err => res.status(400).json(err.stack || err));
})

app.post('/api/sendNotification', (req, res) => {
	var notificationPayload = {
		notification: {
			title: 'Oklahoma Ginger',
			body: 'New blog post!',
			icon: 'assets/icons/notification.png',
		},
	}
	var promises = []
	Subscription.find().exec().then(subscriptions => {
		subscriptions.forEach(subscription => {
			promises.push(
				webpush.sendNotification(
					subscription,
					JSON.stringify(notificationPayload)
				)
			)
		})
	})
	Promise.all(promises).then(() => res.sendStatus(200))
});

app.get('/api/blogs', (req, res) => {
	return Article.find().sort('-date').exec().then(articles => {
		res.json(articles);
	});
});

app.get('/api/blogs/active', (req, res) => {
	return Article.find({active:true}).sort('-date').exec().then(articles => {
		res.json(articles);
	});
});

app.get('/api/blogs/:id', (req, res) => {
	return Article.findById(req.params.id).exec().then(article => {
		res.json(article);
	});
});

app.post('/api/blog', (req, res) => {
	var blog = req.body;
	if(!blog._id) blog = new Article(blog);
	return Article.findByIdAndUpdate(blog._id, blog, {upsert:true, new:true}).exec().then(r => res.json(r), err => res.status(400).json(err.stack || err));
});

app.post('/api/login', (req, res) => {
	return User.findOne({email:req.body.email, password: req.body.password}).exec().then(user => {
		res.json(user);
	});
});
