import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerAddComponent } from './speaker-add/speaker-add.component';
import { SpeakerEditComponent } from './speaker-edit/speaker-edit.component';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { SpeakerThumbnailComponent } from './speaker-thumbnail/speaker-thumbnail.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { DataService } from './services/data.service';
import { ReactiveDataService } from './services/reactive-data.service';

import { Speaker } from './models/speaker';
import { ReactiveSpeakerListComponent } from './reactive-speaker-list/reactive-speaker-list.component';
import { ReactiveSpeakerAddComponent } from './reactive-speaker-add/reactive-speaker-add.component';
import { ReactiveSpeakerEditComponent } from './reactive-speaker-edit/reactive-speaker-edit.component';
import { ReactiveSpeakerDetailComponent } from './reactive-speaker-detail/reactive-speaker-detail.component';
import { ReactiveSpeakerThumbnailComponent } from './reactive-speaker-thumbnail/reactive-speaker-thumbnail.component';

const appRoutes: Routes = [
  { pathMatch: 'full',  path: '', component: HomeComponent },
  { pathMatch: 'full',  path: 'speakers', component: SpeakerListComponent },
  { pathMatch: 'full',  path: 'speakers/new', component: SpeakerAddComponent },
  { pathMatch: 'full',  path: 'speakers/:id', component: SpeakerDetailComponent },
  { pathMatch: 'full',  path: 'speakers/:id/edit', component: SpeakerEditComponent },
  { pathMatch: 'full',  path: 'reactive-speakers', component: ReactiveSpeakerListComponent },
  { pathMatch: 'full',  path: 'reactive-speakers/:id', component: ReactiveSpeakerDetailComponent },
  { pathMatch: 'full',  path: 'contact', component: ContactUsComponent },
  { pathMatch: 'full',  path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    SpeakerListComponent,
    SpeakerAddComponent,
    SpeakerEditComponent,
    SpeakerDetailComponent,
    SpeakerThumbnailComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    ReactiveSpeakerListComponent,
    ReactiveSpeakerAddComponent,
    ReactiveSpeakerEditComponent,
    ReactiveSpeakerDetailComponent,
    ReactiveSpeakerThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    ReactiveDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
