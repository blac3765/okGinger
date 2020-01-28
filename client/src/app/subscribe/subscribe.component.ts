import { Component } 			from '@angular/core';
import { ToastrService } 		from 'ngx-toastr';
import { SwPush } 				from '@angular/service-worker';

import { NewsletterService } 	from '../services/newsletter.service';

@Component({
	selector: 'app-subscribe',
	templateUrl: './subscribe.component.html',
	styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
	readonly VAPID_PUBLIC_KEY = "BCuCcwi7d9UNaoXug1-8NL3r4UqeqM8ROkH9iCnDDhSy1_Tz14aje0dOTlgkFoN00iwILEZ4-Bss3jHoWWnlhmY";
	hide = false;
	showAlert = false;
	convertedVapidKey;
	constructor(private swPush: SwPush, private newsletterService: NewsletterService, private toast:ToastrService) {
		if(!this.swPush.isEnabled) this.hide = true;
		if (Notification.permission === "granted") {
			this.hide = true;
		}
	}

	subscribeToNotifications() {
		if(this.swPush.isEnabled) {
			this.swPush.requestSubscription({
				serverPublicKey: this.VAPID_PUBLIC_KEY,
			}).then(subscription => {
				this.newsletterService.addPushSubscriber(subscription).subscribe();
				this.hide = true;
				this.toast.success('You will be notified of new posts!', 'Success!', {
					positionClass: 'toast-bottom-right',
					timeOut: 3000
				});
			}).catch(error => {
				if(error.toString().includes("Registration failed")) {
					this.toast.warning('Please allow notifications to subscribe to newsletter!', 'Oops!', {
						positionClass: 'toast-top-center',
						timeOut: 5000
					});
					this.hide = false;
				} else {
					console.log('error: %o', error)
				}
			});
		}
	}
}
