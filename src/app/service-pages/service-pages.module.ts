import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { AccelerateComponent } from './accelerate/accelerate.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { CloudTransformsComponent } from './cloud-transforms/cloud-transforms.component';
import { EnterpriceComponent } from './enterprice/enterprice.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { AiComponent } from './ai/ai.component';
import { IotComponent } from './iot/iot.component';
import { ContentManagementComponent } from './content-management/content-management.component';
import { DevopsComponent } from './devops/devops.component';


const routes: Routes = [

  {
    path: '',component:LayoutComponent ,
    children:[
      { path: 'insights', component: InsightsComponent },
      { path: 'experiance', component: ExperianceComponent },
      { path: 'accelerate', component: AccelerateComponent },
      { path: 'mobile-app', component: MobileAppComponent },
      { path: 'cloud-transform', component: CloudTransformsComponent },
      { path: 'enterprice', component: EnterpriceComponent },
      { path: 'data-analytics', component: DataAnalyticsComponent },
      { path: 'ai', component: AiComponent },
      { path: 'iot', component: IotComponent },
      { path: 'content-management', component: ContentManagementComponent },
      { path: 'devops', component: DevopsComponent }
         

    ]
  }
];

@NgModule({
  declarations: [LayoutComponent, InsightsComponent, ExperianceComponent, AccelerateComponent, MobileAppComponent, CloudTransformsComponent, EnterpriceComponent, DataAnalyticsComponent, AiComponent, IotComponent, ContentManagementComponent, DevopsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ServicePagesModule { }
