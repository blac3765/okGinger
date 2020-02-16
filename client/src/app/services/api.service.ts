import { Injectable } 	from '@angular/core';
import { HttpClient }	from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	constructor(private http:HttpClient) {}

	getBlogs() {
		return this.http.get('/api/blogs').toPromise();
	}

	getActiveBlogs() {
		return this.http.get('/api/blogs/active').toPromise();
	}

	getBlog(id) {
		return this.http.get(`/api/blogs/${id}`).toPromise();
	}

	saveBlog(blog) {
		return this.http.post('/api/blog', blog).toPromise();
	}

	login(user) {
		return this.http.post('/api/login', user).toPromise();
	}

	saveImage(image):Promise<any> {
		return <Promise<any>>this.http.post('/api/blog/upload-file', image).toPromise();
	}

}
