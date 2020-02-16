import { Injectable }	from '@angular/core';
import { HttpClient }	from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class NewsletterService {
	url = "http://localhost:8000"
	constructor(private http:HttpClient) {}

	addPushSubscriber(sub) {
		return this.http.post(this.url + '/api/subscription', sub);
	}

	sendNotification() {
		return this.http.post(this.url + '/api/sendNotification', true).toPromise();
	}
}
