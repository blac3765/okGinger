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
	newFilename: String = '';
	newFileExt: String;
	newUpload: any = null;
	saving = false;
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
				this.blogForm = this.formBuilder.group({
					image: [this.blog.image, Validators.required],
					title: [this.blog.title, Validators.required],
					body: [this.blog.body, Validators.required],
					description: [this.blog.description, Validators.required],
					active: [this.blog.active]
				});
			});
		}
	}

	convertToBase64(event) {
		if(event.target.files && event.target.files.length > 0) {
			var reader  = new FileReader();
			let file = event.target.files[0];
			switch(file.type) {
				case 'image/jpg' 		: {
					this.newFilename = (file.name.split('.jpg')[0]);
					this.newFileExt = '.jpg';
					break;
				}
				case 'image/jpeg' 		: {
					this.newFilename = (file.name.split('.jpeg')[0]);
					this.newFileExt = '.jpeg';
					break;
				}
				case 'image/png' 	: {
					this.newFilename = (file.name.split('.png')[0]);
					this.newFileExt = '.png';
					break;
				}
				default : {
					event.target.value = null;
					this.toast.warning(`Incorrect file type!`, 'Failure!', {
						positionClass: 'toast-top-center',
						timeOut: 3000
					});
					return;
				}
			}
			reader.readAsDataURL(file);
			reader.onload = () => {
				var base64 = (<string>reader.result).split(',')[1];
				this.newUpload = {
					name: this.newFilename || file.name,
					type: file.type,
					ext: this.newFileExt,
					content: base64,
					date: new Date(),
					articleId: null
				}
			}
		}
	}

	saveBlog(editBlog) {
		if(this.saving) return;
		this.saving = true;
		if(this.newUpload) this.newUpload.name = this.newFilename;
		if(this.blog) editBlog._id = this.blog._id;
		if(!editBlog.date) editBlog.date = new Date();
		this.api.saveBlog(editBlog).then(async (blog:any) => {
			console.log('blog: %o', blog);
			if(this.newUpload) {
				this.newUpload.articleId = blog._id;
				this.api.saveImage(this.newUpload).then(image => {
					console.log('image: %o', image);
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
				}).catch(err => {
					console.log('err: %o', err);
					if(err.status===413) {
						return this.toast.warning(`Image too big!`, 'Failure!', {
							positionClass: 'toast-top-center',
							timeOut: 3000
						});
					} else {
						this.toast.warning(`Blog not saved!`, 'Failure!', {
							positionClass: 'toast-top-center',
							timeOut: 3000
						});
					}
				});
			} else {
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
			}
		});
	}

}
