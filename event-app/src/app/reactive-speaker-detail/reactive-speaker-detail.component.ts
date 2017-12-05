import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { ReactiveDataService } from '../services/reactive-data.service';
import { ReactiveSpeaker } from '../models/reactive-speaker';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './reactive-speaker-detail.component.html',
  styleUrls: ['./reactive-speaker-detail.component.css']
})
export class ReactiveSpeakerDetailComponent implements OnInit {

  speaker: ReactiveSpeaker;
  imageURL:string = '/assets/photos/';

  constructor(
    public dataService:ReactiveDataService,
    private route:ActivatedRoute, 
    private router:Router
  ) { 
    this.route.params.subscribe((params:Params) => {
      this.speaker = dataService.getSpeaker(params.id);
    });
  }

  ngOnInit() {
  }

  delete(id:number) {
    if(confirm("Are you sure you want to delete " + this.speaker.firstName + " " + this.speaker.lastName + "?")){
      this.dataService.removeSpeaker(id);
      this.router.navigate(['reactive-speakers'])
    }
  }
}
