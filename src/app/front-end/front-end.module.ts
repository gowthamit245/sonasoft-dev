import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from '../contact/contact.component';


import { AboutUsComponent } from '../about-us/about-us.component';
import { CapabilitiesComponent } from '../capabilities/capabilities.component';
import { IndustriesComponent } from '../industries/industries.component';

import { ComingsoonComponent } from '../comingsoon/comingsoon.component';
import { Routes, RouterModule } from '@angular/router';

import { ManufacteringComponent } from '../industries/manufactering/manufactering.component';
import { LayoutComponent } from './layout/layout.component';
import { BfsiComponent } from '../industries/bfsi/bfsi.component';
import { RetailsComponent } from '../industries/retails/retails.component';

const routes: Routes = [

  {
    path: '',component:LayoutComponent ,
    children:[
          { path: 'coming-soon', component: ComingsoonComponent },
          { path: 'contact-us', component: ContactComponent },
          { path: 'about-us', component: AboutUsComponent },
          { path: 'capabilities', component: CapabilitiesComponent },
          { path: 'industries', component: IndustriesComponent },
          { path: 'manufacturing', component: ManufacteringComponent },
          { path: 'bfsi', component: BfsiComponent }
          ,
          { path: 'retail', component: RetailsComponent }

    ]
  }
];

@NgModule({
  declarations: [
    ContactComponent,
   
    AboutUsComponent,
    CapabilitiesComponent,
    IndustriesComponent,
    ComingsoonComponent,
    ManufacteringComponent,
    LayoutComponent,
    RetailsComponent,
    BfsiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class FrontEndModule { }
