import { Component, OnInit } from '@angular/core';
import { gameLinks } from '../frontend_data';

@Component({
  selector: 'app-series-bar',
  templateUrl: './series-bar.component.html',
  styleUrls: ['./series-bar.component.css']
})
export class SeriesBarComponent implements OnInit {
  gameLinks = gameLinks;
  constructor() { }

  ngOnInit() {
  }

}