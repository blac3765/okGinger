import { Component } 			from '@angular/core';
import { ActivatedRoute, Router }		from '@angular/router';
import { Location } 					from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
	home:boolean = true;
	route:string;
	isDesktop:boolean = false;
	show:boolean = false;

	constructor(location: Location, router: Router) {
		window.addEventListener('resize', () => this.onResize());
		this.onResize();
		router.events.subscribe(() => {
			if(location.path() != '/home'){
				var state = location.path().split("/");
				this.route = "/" + state[1];
				this.home = false;
			} else {
				this.route = 'Home';
				this.home = true;
			}
		});
	}

	onResize() {
		this.isDesktop = window['innerWidth']>=1280;
		// this.isDesktop ? this.mode = 'side' : this.mode = 'over';
	}

	mobileToggle() {
		this.show = !this.show;
	}
}
