import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {SwiperModule} from "ngx-swiper-wrapper";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SwiperModule,
    AuthModule
  ],
    exports: []
})
export class SharedModule {
}
