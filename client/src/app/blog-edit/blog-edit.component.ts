import { Component } 		from '@angular/core';
import { FormBuilder } 		from '@angular/forms';
import { ToastrService } 	from 'ngx-toastr';

import { ApiService } 			from '../services/api.service';
import { NewsletterService }	from '../services/newsletter.service';

@Component({
	selector: 'app-blog-edit',
	templateUrl: './blog-edit.component.html',
	styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent {
	loginForm;
	loggedIn:boolean = true;
	blogs:any = [];
	constructor(private formBuilder:FormBuilder, private newsletterService:NewsletterService, private toast:ToastrService, private api:ApiService) {
		this.api.getBlogs().then(blogs => {
			this.blogs = blogs;
		});
		this.loginForm = this.formBuilder.group({
			email: '',
			password: ''
		});
	}

	login(user) {
		console.log(user);
		if(!user.email || !user.password) {
			this.toast.warning('Missing login credentials!', 'Oops!', {
				positionClass: 'toast-top-center',
				timeOut: 5000
			});
			return;
		}
		this.api.login(user).then(res => {
			if(!res) {
				this.toast.warning("Email or password are incorrect.", 'Oops!', {
					positionClass: 'toast-top-center',
					timeOut: 5000
				});
				return;
			} else {
				this.loggedIn = true;
				this.toast.success(`Welcome back ${user.email}!`, 'Success!', {
					positionClass: 'toast-top-center',
					timeOut: 5000
				});
			}
		})
	}

	sendNotification() {
		this.newsletterService.sendNotification().then(res => {
			console.log('res: %o', res);
		});
	}

}
