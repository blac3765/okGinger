import { Component } 		from '@angular/core';
import { ActivatedRoute }	from '@angular/router';
import { DomSanitizer }		from '@angular/platform-browser';

import { ApiService }		from '../../services/api.service';

@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
	blog:any;

	constructor(private route:ActivatedRoute, private api:ApiService, private sanitizer:DomSanitizer) {
		var blogId;
		this.route.params.subscribe(params => {
			blogId = params.blogId;
		})
		this.api.getBlog(blogId).then(blog => {
			this.blog = blog;
			this.blog.body = sanitizer.bypassSecurityTrustHtml(this.blog.body);
		});

	}

}
