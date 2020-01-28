import { NgModule } 							from '@angular/core';
import { Routes, RouterModule } 				from '@angular/router';

import { HomeComponent } 						from './home/home.component';
import { ContactComponent } 					from './contact/contact.component';
import { BlogComponent } 						from './blog/blog.component';
import { PhotographyComponent } 				from './photography/photography.component';
import { DesignComponent } 						from './design/design.component';
import { AboutComponent } 						from './about/about.component';
import { GalleryComponent }						from './gallery/gallery.component';
import { GalleryDetailComponent }				from './gallery/gallery-detail/gallery-detail.component';
import { BlogDetailComponent }					from './blog/blog-detail/blog-detail.component';
import { BlogEditComponent } 					from './blog-edit/blog-edit.component';
import { BlogEditDetailComponent } 				from './blog-edit/blog-edit-detail/blog-edit-detail.component';

const routes: Routes = [
	{path:'',							redirectTo:'/home', pathMatch:'full'},
	{path:'home',						component:HomeComponent},
	{path:'contact',					component:ContactComponent},
	{path:'blog',						component:BlogComponent},
	{path:'blog/login',					component:BlogEditComponent},
	{path:'blog/edit/:blogId',			component:BlogEditDetailComponent},
	{path:'blog/:blogId',				component:BlogDetailComponent},
	{path:'design',						component:DesignComponent},
	{path:'design/branding',			component:GalleryComponent},
	{path:'design/prints',				component:GalleryComponent},
	{path:'about',						component:AboutComponent},
	{path:'photography',				component:PhotographyComponent},
	{path:'photography/weddings',		component:GalleryComponent},
	{path:'photography/family',			component:GalleryComponent},
	{path:'photography/portraits',		component:GalleryComponent},
	{path:'photography/gallery-detail', component:GalleryDetailComponent},
	{path:'design/gallery-detail',		component:GalleryDetailComponent},
	{path:'**',							component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
