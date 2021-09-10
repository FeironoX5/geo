import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-popup',
  templateUrl: './news-popup.component.html',
  styleUrls: ['./news-popup.component.css']
})
export class NewsPopupComponent implements OnInit {
  @Input() title;
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
