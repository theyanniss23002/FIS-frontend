import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from "ngx-swiper-wrapper";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  // @Input() name: string;
  //
  // username: string = "user";
  //
  // valueItem = [
  //   {
  //     path: 'auth/signup',
  //     value: 'Registration'
  //   },
  //   {
  //     path: 'auth/login',
  //     value: 'Authorization'
  //   },
  //   {
  //     path: '/main',
  //     value: 'Go to app'
  //   },
  // ]
  //
  // public show: boolean = true;
  //
  // public slides = [
  //   {
  //     title: 'Welcome to the Face Idea Service',
  //     subtitle: 'Free space for intermedia',
  //     descriptions: 'In this application you will receive dog slippers and popados from Pindos',
  //     background: '#FFBE0F',
  //     type: 'main',
  //   },
  //   {
  //     title: 'Exploitation',
  //     subtitle: 'Free space for intermedia',
  //     descriptions: 'In this application you will receive dog slippers and popados from Pindos',
  //     background: '#07B38B',
  //     type: 'info',
  //   },
  //   {
  //     title: 'Documentation',
  //     subtitle: 'Free space for intermedia',
  //     descriptions: 'In this application you will receive dog slippers and popados from Pindos',
  //     background: '#FF514E',
  //     type: 'about',
  //   },
  //   {
  //     title: 'App view',
  //     subtitle: 'Free space for intermedia',
  //     descriptions: 'In this application you will receive dog slippers and popados from Pindos',
  //     background: '#131560',
  //     type: 'other',
  //   },
  // ];
  //
  // public type: string = 'component';
  //
  // public disabled: boolean = false;
  //
  // public config: SwiperConfigInterface = {
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   keyboard: true,
  //   mousewheel: true,
  //   scrollbar: true,
  //   navigation: false,
  //   pagination: false,
  // };
  //
  constructor(
    // private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.username = this.router.snapshot.params['name'];
  }

}
