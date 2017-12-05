import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { DataService } from '../services/data.service';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.css']
})
export class SpeakerDetailComponent implements OnInit {

  speaker: Speaker;
  imageURL:string = '/assets/photos/';

  constructor(
    public dataService:DataService,
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
      this.router.navigate(['speakers'])
    }
  }

  edit(id:number) {
    console.log('edit');
  }

}
