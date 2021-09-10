import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  x = '';
  error: any;
  em = '';
  fio = '';
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.x.length > 10 && this.fio.length > 7 && this.em.length > 4) {
      this.error = 'Отправлено!';
      this.dataService.addFeedback({name: this.fio, email: this.em, text: this.x});
    } else {
      this.error = 'Введите данные полностью!';
    }
  }
}
