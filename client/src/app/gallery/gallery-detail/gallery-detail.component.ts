import { Component } 		from '@angular/core';
import { ActivatedRoute } 	from '@angular/router';

@Component({
	selector: 'app-gallery-detail',
	templateUrl: './gallery-detail.component.html',
	styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent {
	image:any;
	isDesktop:boolean;
	path:any;
	constructor(private route:ActivatedRoute) {
		window.addEventListener('resize', () => this.onResize());
		this.onResize();
		this.image = this.route.snapshot.queryParamMap.get('image');
		this.path = this.route.snapshot.url[0].path.toString()+ '/' + this.route.snapshot.queryParamMap.get('path');
		console.log('this.route.snapshot.url: %o', this.route.snapshot.url);
	}

	onResize() {
		this.isDesktop = window['innerWidth']>=1280;
	}
}
