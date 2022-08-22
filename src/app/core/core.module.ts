import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from "@core/core-routing.module";
import { DefaultLayoutComponent } from "@core/layouts/default/default-layout/default-layout.component";
import { LayoutHeaderComponent } from "@core/layouts/default/layout-header/layout-header.component";
import { LayoutSidebarComponent } from "@core/layouts/default/layout-sidebar/layout-sidebar.component";
import { LayoutFooterComponent } from "@core/layouts/default/layout-footer/layout-footer.component";
import { AboutPageComponent } from "@core/pages/about-page/about-page.component";
import { NotfoundPageComponent } from "@core/pages/notfound-page/notfound-page.component";
import { PageHeaderCardComponent } from '@core/components/page-header-card/page-header-card.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    NotfoundPageComponent,
    DefaultLayoutComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutSidebarComponent,
    PageHeaderCardComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ],
  exports: [
    DefaultLayoutComponent,
    PageHeaderCardComponent,
  ]
})
export class CoreModule {
}
