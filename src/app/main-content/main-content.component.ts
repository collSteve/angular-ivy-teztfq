import { Component, OnInit } from '@angular/core';
import { gameDescription, math } from '../frontend_data';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  gameDescription = gameDescription;
  math = math;
  constructor() { }

  ngOnInit() {
  }
}