import { Component } 					from '@angular/core';
import { Router, ActivatedRoute } 		from '@angular/router';

import { ApiService } 					from '../services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
	family = [
		{
			picture: '/assets/couples/youth christmas 2019-1.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-2.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-3.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-4.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-5.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-6.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-7.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-9.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-10.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-11.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-12.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-13.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-14.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-15.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-16.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-17.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-18.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-19.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-20.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-21.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-22.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-23.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-24.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-25.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-26.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-27.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-28.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-29.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-30.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-31.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-32.jpg'
		},
		{
			picture: '/assets/couples/youth christmas 2019-33.jpg'
		}
	];
	branding = [
		{
			picture: '/assets/logos/Able Logo.jpg'
		},
		{
			picture: '/assets/logos/Carly.jpg'
		},
		{
			picture: '/assets/logos/GPACAC 2018.jpg'
		},
		{
			picture: '/assets/logos/Logo - GPACAC 2015.jpg'
		},
		{
			picture: '/assets/logos/Logo - GPACAC 2016.jpg'
		},
		{
			picture: '/assets/logos/Logo - Teena Moore.jpg'
		},
		{
			picture: '/assets/logos/MMM Workbooks.jpg'
		},
		{
			picture: '/assets/logos/MPA.jpg'
		},
		{
			picture: '/assets/logos/Program GPACAC 2015.jpg'
		},
		{
			picture: '/assets/logos/Program GPACAC 2017.jpg'
		},
		{
			picture: '/assets/logos/TCT Workbooks.jpg'
		},
		{
			picture: '/assets/logos/Focus Building Logo.jpg'
		},
		{
			picture: '/assets/logos/Forever Home Logo.jpg'
		}
	]
	prints = [
		{
			picture: '/assets/logos/Baby Shower 1.jpg'
		},
		{
			picture: '/assets/logos/Baby Shower 2.jpg'
		},
		{
			picture: '/assets/logos/Baby Shower 3.jpg'
		},
		{
			picture: '/assets/logos/Baby Shower 4.jpg'
		},
		{
			picture: '/assets/logos/Christmas Card 1.jpg'
		},
		{
			picture: '/assets/logos/Christmas Card 2.jpg'
		},
		{
			picture: '/assets/logos/Christmas Card 3.jpg'
		},
		{
			picture: '/assets/logos/Christmas Card 4.jpg'
		},
		{
			picture: '/assets/logos/STD 1.jpg'
		},
		{
			picture: '/assets/logos/STD 2.jpg'
		},
		{
			picture: '/assets/logos/STD 3.jpg'
		},
		{
			picture: '/assets/logos/Wedding 1.jpg'
		},
		{
			picture: '/assets/logos/Wedding 2.jpg'
		},
		{
			picture: '/assets/logos/Wedding 3.jpg'
		},
		{
			picture: '/assets/logos/Wedding 4.jpg'
		},
		{
			picture: '/assets/logos/Wedding 5.jpg'
		},
		{
			picture: '/assets/logos/Wedding 6.jpg'
		},
		{
			picture: '/assets/logos/Wedding 7.jpg'
		}
	]
	portraits = [
		{
			picture: '/assets/portraits/portraitbridal-1.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-2.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-3.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-4.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-5.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-6.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-7.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-8.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-9.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-10.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-11.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-12.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-13.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-14.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-15.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-16.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-17.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-18.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-19.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-20.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-21.jpg'
		},
		{
			picture: '/assets/portraits/portraitbridal-22.jpg'
		}
	]
	weddings = [
		{
			picture:'/assets/weddings/wedding-1.jpg'
		},
		{
			picture:'/assets/weddings/wedding-2.jpg'
		},
		{
			picture:'/assets/weddings/wedding-3.jpg'
		},
		{
			picture:'/assets/weddings/wedding-4.jpg'
		},
		{
			picture:'/assets/weddings/wedding-5.jpg'
		},
		{
			picture:'/assets/weddings/wedding-6.jpg'
		},
		{
			picture:'/assets/weddings/wedding-7.jpg'
		},
		{
			picture:'/assets/weddings/wedding-8.jpg'
		},
		{
			picture:'/assets/weddings/wedding-9.jpg'
		},
		{
			picture:'/assets/weddings/wedding-10.jpg'
		},
		{
			picture:'/assets/weddings/wedding-11.jpg'
		},
		{
			picture:'/assets/weddings/wedding-12.jpg'
		},
		{
			picture:'/assets/weddings/wedding-13.jpg'
		},
		{
			picture:'/assets/weddings/wedding-14.jpg'
		},
		{
			picture:'/assets/weddings/wedding-15.jpg'
		},
		{
			picture:'/assets/weddings/wedding-16.jpg'
		},
		{
			picture:'/assets/weddings/wedding-17.jpg'
		},
		{
			picture:'/assets/weddings/wedding-18.jpg'
		},
		{
			picture:'/assets/weddings/wedding-19.jpg'
		},
		{
			picture:'/assets/weddings/wedding-20.jpg'
		},
		{
			picture:'/assets/weddings/wedding-21.jpg'
		},
		{
			picture:'/assets/weddings/wedding-22.jpg'
		},
		{
			picture:'/assets/weddings/wedding-23.jpg'
		}
	]
	error = [
		{picture:'https://cdn.pixabay.com/photo/2016/04/24/22/30/monitor-1350918_960_720.png'}
	]
	myOptions = {
		columnWidth: 400,
		originLeft: true,
		originTop: true,
		resize: true,
		gutter: 4
	}
	path:any;
	loading = true;
	loadedImages = 0;
	masonryItems = [];
	constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) {
		this.path = this.route.snapshot.url[this.route.snapshot.url.length-1].path.toString();
		switch(this.path) {
			case 'family':
				this.masonryItems = this.family;
				break;
			case 'branding':
				this.masonryItems = this.branding;
				break;
			case 'prints':
				this.masonryItems = this.prints;
				break;
			case 'portraits':
				this.masonryItems = this.portraits;
				break;
			case 'weddings':
				this.masonryItems = this.weddings;
				break;
			default:
				this.masonryItems = this.error;
		}
	}

	openImage(item) {
		if(this.path === 'weddings' || this.path === 'portraits' || this.path === 'family')this.router.navigate(['/photography/gallery-detail'], {queryParams: {path:this.path, image:item.picture}, skipLocationChange:true});
		else this.router.navigate(['/design/gallery-detail'], {queryParams: {path:this.path, image:item.picture}, skipLocationChange:true});
	}

	imageLoaded() {
		this.loadedImages++;
		if(this.loadedImages = this.masonryItems.length) this.loading = false;
	}

}
