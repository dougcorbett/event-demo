import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'app-speaker-add',
  templateUrl: './speaker-add.component.html',
  styleUrls: ['./speaker-add.component.css']
})
export class SpeakerAddComponent implements OnInit {

  speaker: Speaker = new Speaker();

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
 
  onSubmit({value, valid}: { value: Speaker, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass:'alert-danger', timeout: 4000
      });
      this.router.navigate(['speakers/new'])
    } else {
      this.dataService.addSpeaker(value);
      this.flashMessagesService.show('New speaker added.', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['speakers'])
    }
  }
}
