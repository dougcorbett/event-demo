import { Component, OnInit } from '@angular/core';

import { ReactiveDataService } from '../services/reactive-data.service';
import { ReactiveSpeaker } from '../models/reactive-speaker';

@Component({
  selector: 'app-reactive-speaker-list',
  templateUrl: './reactive-speaker-list.component.html',
  styleUrls: ['./reactive-speaker-list.component.css']
})
export class ReactiveSpeakerListComponent implements OnInit {

  speakers: ReactiveSpeaker[];
  imageURL:string = '/assets/photos/';
  
  constructor(public dataService:ReactiveDataService) 
  { 
    this.speakers = dataService.getSpeakers();
  }

  ngOnInit() 
  {

  }

  public seedSpeakers() 
  {
    this.dataService.seedSpeakers();
    this.speakers = this.dataService.getSpeakers();
  }

}
