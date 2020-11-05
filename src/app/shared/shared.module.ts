import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {SwiperModule} from "ngx-swiper-wrapper";
import { PrevPageComponent } from './prev-page/prev-page.component';


@NgModule({
  declarations: [PrevPageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SwiperModule,
  ],
  exports: [
    PrevPageComponent
  ]
})
export class SharedModule {
}
