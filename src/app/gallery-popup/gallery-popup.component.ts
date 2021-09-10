import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.css']
})
export class GalleryPopupComponent implements OnInit {
  @Input() title;
  @Input() images;
  constructor() { }

  ngOnInit(): void {
  }

}
