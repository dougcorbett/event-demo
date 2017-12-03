import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Speaker } from '../models/speaker';
import { Session } from '../models/session';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  speakers: Speaker[];
  imageURL:string = '/assets/photos/';

  constructor(public dataService:DataService) 
  { 
    this.speakers = dataService.getSpeakers();
  }

  ngOnInit() {
  }

}
