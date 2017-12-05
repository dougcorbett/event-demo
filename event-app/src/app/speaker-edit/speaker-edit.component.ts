import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"
import { FlashMessagesService } from 'angular2-flash-messages';

import { DataService } from '../services/data.service';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.css']
})
export class SpeakerEditComponent implements OnInit {

  id:number;
  speaker:Speaker = new Speaker();

  constructor(
    public dataService:DataService,
    private route:ActivatedRoute, 
    private router:Router,
    private flashMessagesService: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = params.id;
      this.speaker = this.dataService.getSpeaker(params.id);
    });
  }

  onSubmit({value, valid}: { value: Speaker, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass:'alert-danger', timeout: 4000
      });
      this.router.navigate(['speakers/' + this.id + '/edit'])
    } else {
      this.dataService.updateSpeaker(this.id, value);
      this.flashMessagesService.show('Speaker updated.', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['speakers/' + this.id])
    }
  }

}
