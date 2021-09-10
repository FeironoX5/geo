import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  o = false;
  otitle = '';
  otext = '';
  news = [];
  gallery: any;
  open = false;
  oititle = '';
  oi = false;
  oimages = '';

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getNews().subscribe(value => {
      this.news = value.splice(0, 4);
    });
    this.dataService.getGallery().subscribe(value => {
      this.gallery = value.splice(0, 4);
    });


  }

}
