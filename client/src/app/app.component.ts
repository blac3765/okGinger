import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }		from '@angular/router';
import { Location } 					from '@angular/common';
import { SwPush } 				from '@angular/service-worker';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	timerHandle: any;
	// version = version;
	wsMode = false;
	collapsed = true;
	mobile = false;
	routed:string;

	constructor(private route:ActivatedRoute, private router:Router, public location: Location) {
		window.addEventListener('resize', () => this.onResize());
		this.onResize();

		route.queryParams.subscribe(queryParams => {
			this.wsMode = queryParams.wsMode==='true';
		});

		router.events.subscribe((val) => {
			if(location.path() != ''){
				this.routed = location.path();
				if(this.routed!=='/home'){
					document.body.className = '';
				} else {
					document.body.className = 'selector';
				}
			} else {
				this.routed = 'Home'
			}
		});
	}
	ngOnInit() {
		document.body.className = 'selector';
	}

	ngOnDestroy(){
		document.body.className='';
	}

	onResize() {
		this.mobile = window.innerWidth<992;
	}

	mobileToggle() {
		if(this.collapsed) {
			document.getElementById('containerTop').scrollIntoView(true);
		}
		this.collapsed = !this.collapsed;
	}
}
