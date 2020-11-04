import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {SwiperComponent} from './swiper/swiper.component';
import {SwiperModule} from "ngx-swiper-wrapper";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [SwiperComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SwiperModule,
    AuthModule
  ],
    exports: [SwiperComponent]
})
export class SharedModule {
}
