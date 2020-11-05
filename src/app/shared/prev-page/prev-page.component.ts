import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-prev-page',
  templateUrl: './prev-page.component.html',
  styleUrls: ['./prev-page.component.scss']
})
export class PrevPageComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  backPreviousPage() {
    this._location.back();
  }
}
