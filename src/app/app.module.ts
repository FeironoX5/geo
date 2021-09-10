import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DoneComponent } from './done/done.component';
import { TeamComponent } from './team/team.component';
import { YoungGComponent } from './young-g/young-g.component';
import {DataService} from './data.service';
import { NewsPopupComponent } from './news-popup/news-popup.component';
import { JoinComponent } from './join/join.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule} from '@angular/forms';
import { MemberPopupComponent } from './member-popup/member-popup.component';
import { PayComponent } from './pay/pay.component';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { GalleryPopupComponent } from './gallery-popup/gallery-popup.component';

const firebaseConfig = {
  apiKey: 'AIzaSyD02PrzChvU5Vo7of3UA0gTlMqfgMbBquA',
  authDomain: 'rosgeo-2172c.firebaseapp.com',
  projectId: 'rosgeo-2172c',
  storageBucket: 'rosgeo-2172c.appspot.com',
  messagingSenderId: '390110572368',
  appId: '1:390110572368:web:c581ccf1b5cff7a85bc655',
  measurementId: 'G-8FMKC28S8Q'
};

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    GalleryComponent,
    DoneComponent,
    TeamComponent,
    YoungGComponent,
    NewsPopupComponent,
    JoinComponent,
    FeedbackComponent,
    MemberPopupComponent,
    PayComponent,
    ImagePopupComponent,
    GalleryPopupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'news', component: NewsComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'results', component: DoneComponent},
      {path: 'team', component: TeamComponent},
      {path: 'join', component: JoinComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'pay', component: PayComponent},
      {path: 'younggeo', component: YoungGComponent},
    ], {useHash: false}),
    FormsModule
  ],
  providers: [DataService,
    {provide : LocationStrategy , useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

