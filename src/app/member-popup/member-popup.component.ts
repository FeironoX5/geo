import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-member-popup',
  templateUrl: './member-popup.component.html',
  styleUrls: ['./member-popup.component.css']
})
export class MemberPopupComponent implements OnInit {
  @Input() title;
  @Input() text;
  @Input() img;
  constructor() { }

  ngOnInit(): void {
  }

}
