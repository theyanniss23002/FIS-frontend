import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-purple-btn',
  templateUrl: './purple-btn.component.html',
  styleUrls: ['./purple-btn.component.scss']
})
export class PurpleBtnComponent implements OnInit {

  @Input()
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
