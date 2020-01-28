import { Component } 				from '@angular/core';
import { ActivatedRoute }			from '@angular/router';
import { FormBuilder, Validators }	from '@angular/forms';
import { ToastrService }			from 'ngx-toastr';

import { ApiService }				from '../../services/api.service';

@Component({
	selector: 'app-blog-edit-detail',
	templateUrl: './blog-edit-detail.component.html',
	styleUrls: ['./blog-edit-detail.component.scss']
})
export class BlogEditDetailComponent {
	blog:any;
	blogForm;
	bodyConfig = {
		"editable": true,
		"spellcheck": true,
		"height": "auto",
		"minHeight": "100",
		"width": "auto",
		"minWidth": "0",
		"translate": "yes",
		"enableToolbar": true,
		"showToolbar": true,
		"placeholder": "Body",
		"toolbar": [
			["bold", "italic", "underline", "strikeThrough"],
			["fontSize", "color", "justifyLeft", "justifyCenter", "justifyRight"],
			["orderedList", "unorderedList"]
		]
	}

	constructor(private formBuilder:FormBuilder, private route:ActivatedRoute, private toast:ToastrService, private api:ApiService) {
		var blogId;
		this.route.params.subscribe(params => {
			blogId = params.blogId;
		});
		console.log('blogId: %o', blogId);
		if(blogId==="new") {
			this.blog = {
				image: '',
				title: '',
				body: '',
				description: '',
				active: false
			}
			console.log('this.blog: %o', this.blog);
			this.blogForm = this.formBuilder.group({
				image: ['', Validators.required],
				title: ['', Validators.required],
				body: ['', Validators.required],
				description: ['', Validators.required],
				active: ''
			});
		} else {
			this.api.getBlog(blogId).then(blog => {
				this.blog = blog;
				console.log('')
				if(!blog) {

				}
				if(blog) {
					this.blogForm = this.formBuilder.group({
						image: [this.blog.image, Validators.required],
						title: [this.blog.title, Validators.required],
						body: [this.blog.body, Validators.required],
						description: [this.blog.description, Validators.required],
						active: [this.blog.active]
					});
				}
			});
		}
	}

	saveBlog(editBlog) {
		if(this.blog) editBlog._id = this.blog._id;
		if(!editBlog.date) editBlog.date = new Date();
		this.api.saveBlog(editBlog).then(blog => {
			if(blog) {
				this.toast.success(`Blog Saved!`, 'Success!', {
					positionClass: 'toast-top-center',
					timeOut: 3000
				});
				window.history.back();
			} else {
				this.toast.warning(`Blog not saved!`, 'Failure!', {
					positionClass: 'toast-top-center',
					timeOut: 3000
				});
			}
		});
	}

}
