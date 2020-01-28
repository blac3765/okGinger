import { Injectable }	from '@angular/core';
import { HttpClient }	from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class NewsletterService {
	url = 'http://localhost:8000/api/subscription';
	constructor(private http:HttpClient) {}

	addPushSubscriber(sub: PushSubscription) {
		console.log('sub: %o', sub);
		return this.http.post(this.url, sub)
	}
}
