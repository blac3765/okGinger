import { Component } 		from '@angular/core';
import { ApiService } 		from '../services/api.service';

import { DomSanitizer }		from '@angular/platform-browser';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})

export class BlogComponent {
	blogs:any;
	constructor(private api:ApiService, private sanitizer:DomSanitizer) {
		this.api.getActiveBlogs().then(blogs => {
			this.blogs = blogs;
			this.blogs.forEach(blog => {
				blog.description = sanitizer.bypassSecurityTrustHtml(blog.description);
			});
		});

	}

}
