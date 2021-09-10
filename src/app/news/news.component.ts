import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Array<any>;
  o = false;
  otitle = '';
  otext = '';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNews().subscribe(value => {
      this.news = value.sort((a, b) => {
        console.log(a, b);
        // @ts-ignore
        if ( a.d < b.d ) {
          return 1;
        }
        // @ts-ignore
        if ( a.d > b.d ) {
          return -1;
        }
        return 0;
      });
    });
  }

  getText(text) {
    return text.slice(0, 400) + '...';
  }
}
