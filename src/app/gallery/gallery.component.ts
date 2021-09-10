import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  gallery: any;
  oititle = '';
  oi = false;
  oimages = '';

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getGallery().subscribe(value => {
      this.gallery = value.sort((a, b) => {
        // @ts-ignore
        if (a.y < b.y) {
          return 1;
        }
        // @ts-ignore
        if (a.y > b.y) {
          return -1;
        }
        return 0;
      });
    });
  }
}
