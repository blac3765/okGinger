import { Injectable }	from '@angular/core';
import { HttpClient }	from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class NewsletterService {

	constructor(private http:HttpClient) {}

	addPushSubscriber(sub: PushSubscription) {
		console.log('sub: %o', sub);
		return this.http.post('/api/subscription', sub)
	}
}
