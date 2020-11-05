import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from "ngx-swiper-wrapper";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() name: string;

  username: string = "user";

  valueItem = [
    {
      path: '/signup',
      value: 'Registration'
    },
    {
      path: '/login',
      value: 'Authorization'
    },
    {
      path: '/main/:name',
      value: 'Go to app'
    },
  ]

  public show: boolean = true;

  public slides = [
    {
      title: 'Welcome to the Face Idea Service',
      subtitle: 'Free space for intermedia',
      descriptions: 'In this application you will receive dog slippers and popados from Pindos',
      background: '#1F1F1F',
      type: 'main',
    },
    {
      title: 'Exploitation',
      subtitle: 'Free space for intermedia',
      descriptions: 'In this application you will receive dog slippers and popados from Pindos',
      background: '#1F1F1F',
      type: 'info',
    },
    {
      title: 'Documentation',
      subtitle: 'Free space for intermedia',
      descriptions: 'In this application you will receive dog slippers and popados from Pindos',
      background: '#1F1F1F',
      type: 'about',
    },
    {
      title: 'App view',
      subtitle: 'Free space for intermedia',
      descriptions: 'In this application you will receive dog slippers and popados from Pindos',
      background: '#1F1F1F',
      type: 'other',
    },
  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: false,
    pagination: false,
  };

  constructor(
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.username = this.router.snapshot.params['name'];
  }


}
