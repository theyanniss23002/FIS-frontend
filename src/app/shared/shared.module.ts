import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {SwiperComponent} from './swiper/swiper.component';
import {SwiperModule} from "ngx-swiper-wrapper";


@NgModule({
  declarations: [SwiperComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SwiperModule
  ],
  exports: [SwiperComponent]
})
export class SharedModule {
}
