import { BrowserModule } 						from '@angular/platform-browser';
import { NgModule } 							from '@angular/core';
import { NgxMasonryModule } 					from 'ngx-masonry';
import { ServiceWorkerModule }					from '@angular/service-worker';
import { HttpClientModule } 					from '@angular/common/http';
import { ToastrModule } 						from 'ngx-toastr';
import { BrowserAnimationsModule } 				from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } 	from '@angular/forms';
import { NgxEditorModule } 						from 'ngx-editor';
import { AngularFontAwesomeModule } 			from 'angular-font-awesome';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } 					from './app-routing.module';
import { AppComponent } 						from './app.component';
import { SideNavComponent } 					from './side-nav/side-nav.component';
import { HomeComponent } 						from './home/home.component';
import { ContactComponent } 					from './contact/contact.component';
import { BlogComponent } 						from './blog/blog.component';
import { PhotographyComponent } 				from './photography/photography.component';
import { DesignComponent } 						from './design/design.component';
import { AboutComponent } 						from './about/about.component';
import { GalleryComponent } 					from './gallery/gallery.component';
import { SubscribeComponent } 					from './subscribe/subscribe.component';
import { environment } 							from '../environments/environment';
import { GalleryDetailComponent } 				from './gallery/gallery-detail/gallery-detail.component';
import { BlogDetailComponent } 					from './blog/blog-detail/blog-detail.component';
import { BlogEditComponent } 					from './blog-edit/blog-edit.component';
import { BlogEditDetailComponent } 				from './blog-edit/blog-edit-detail/blog-edit-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		SideNavComponent,
		HomeComponent,
		ContactComponent,
		BlogComponent,
		PhotographyComponent,
		DesignComponent,
		AboutComponent,
		GalleryComponent,
		SubscribeComponent,
		GalleryDetailComponent,
		BlogDetailComponent,
		BlogEditComponent,
		BlogEditDetailComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxMasonryModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		NgxEditorModule,
		AngularFontAwesomeModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		ToastrModule.forRoot()
	],
	providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule { }
