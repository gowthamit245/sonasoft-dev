import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AboutUsComponent } from './about-us/about-us.component';


import { ComingsoonComponent } from './comingsoon/comingsoon.component';

import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { IndustriesComponent } from './industries/industries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'coming-soon', component: ComingsoonComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: '**', component: PageNotFoundComponent } 
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
