import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    window.addEventListener('scroll', ev => {
      if (window.pageYOffset !== 0) {
        document.getElementById('header').style.display = 'none';
      } else {
        document.getElementById('header').style.display = 'block';
      }
    }, false);
    this.router.events.subscribe(evt => {
      window.scrollTo(0, 0);
    });

  }
}
