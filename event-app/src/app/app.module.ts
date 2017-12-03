import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { pathMatch: 'full',  path: '', component: HomeComponent },
  { pathMatch: 'full',  path: 'speakers', component: SpeakerListComponent },
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
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
