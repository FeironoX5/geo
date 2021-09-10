import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  const data = [
    {
      films: [
        {
          title: string,
          descripton: string,
          image_vert: string,
          image_horis: string,
        }
      ],
      music: [
      ]
    }
  ];
  constructor(public db: AngularFirestore) {
  }

  getGallery() {
    return this.db.collection('/gallery').valueChanges();

    // .subscribe(value => {
  //     console.log(value);
  //   });
  }
  getG(x) {
    return this.db.collection('gallery').doc(x).get();
  }
  getNews() {
    return this.db.collection('/news').valueChanges();
  }
  getResults() {
    return this.db.collection('/results').valueChanges();
  }
  getTeam() {
    return this.db.collection('/team').valueChanges();
  }
  addFeedback(x) {
    this.db.collection('feedbacks').add({text: x});
  }

}
