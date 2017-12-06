import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import 'rxjs/add/operator/debounceTime'; 

import { ReactiveDataService } from '../services/reactive-data.service';
import { ReactiveSpeaker } from '../models/reactive-speaker';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-reactive-speaker-add',
  templateUrl: './reactive-speaker-add.component.html',
  styleUrls: ['./reactive-speaker-add.component.css']
})
export class ReactiveSpeakerAddComponent implements OnInit {

  speakerForm: FormGroup;
  speaker: ReactiveSpeaker = new ReactiveSpeaker();
  
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  }

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router,
    private dataService: ReactiveDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.speakerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   title: new FormControl(),
    //   email: new FormControl(),
    //   phone: new FormControl(),
    //   company: new FormControl(),
    //   twitter: new FormControl(),
    //   photo: new FormControl("generic.jpg"),
    //   biography: new FormControl()      
    // });

    this.speakerForm = this.fb.group({
      firstName: ['', [ Validators.required, Validators.minLength(2) ] ],
      lastName: ['', [ Validators.required, Validators.minLength(2) ] ],
      title: '',
      notification: ['email', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ] ],
      phone: ['', [ Validators.minLength(10) ] ],
      company: '',
      twitter: '',
      photo: 'generic.jpg',
      biography: '',
      sessions: this.fb.array( [ this.buildSession() ])
    });

    // alternate syntax - photo:{'generic.jpg', disabled:true }

    // this.speakerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   title: new FormControl(),
    //   email: new FormControl(),
    //   phone: new FormControl(),
    //   company: new FormControl(),
    //   twitter: new FormControl(),
    //   photo: new FormControl("generic.jpg"),
    //   biography: new FormControl()      
    // });

      this.speakerForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));

      const emailCtrl = this.speakerForm.get('email');
      emailCtrl.valueChanges.debounceTime(1000).subscribe(value => this.setMessage(emailCtrl));
  }

  get sessions(): FormArray{
    return <FormArray>this.speakerForm.get('sessions');
  }
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[key]).join(' ');
    }
  }

  addTestData() {
    this.speakerForm.setValue({
      firstName: 'Tom',
      lastName: 'Selleck',
      title: 'Private Investigator',
      notification: 'email',
      email: 'tselleck@gmail.com',
      phone: '123-555-1212',
      company: 'Robin\'s Nest',
      twitter: 'selleckdaman',
      photo: 'generic.jpg',
      biography: 'Candy canes cotton candy cupcake halvah dessert. Bonbon lollipop apple pie cake marshmallow jelly-o muffin. Candy jujubes marshmallow cheesecake brownie. Lollipop topping tart tootsie roll. Bonbon donut pie. Lemon drops candy canes carrot cake candy canes gummi bears. Cotton candy icing lollipop. Chocolate cake tootsie roll biscuit chocolate halvah soufflé marshmallow toffee. Sugar plum cookie caramels candy pudding cupcake brownie. Brownie bear claw liquorice chocolate cake tart topping. Liquorice gummi bears jelly beans. Jelly-o gummi bears cookie tiramisu sweet roll lollipop.',
      sessions: [ 
        { title: 'Angular Rox', description: 'wan that aprile for the sure the sorte' }
     ]
    });
  }

  buildSession(): FormGroup {
    return this.fb.group({
              title: '',
              description: ''
            })
  }

  addSession(): void {
    this.sessions.push(this.buildSession());
  }

  updateTestData() {
    this.speakerForm.patchValue({
      firstName: 'Dick',
      lastName: 'Tracy'
    });
  }

  onSubmit() {
    if (!this.speakerForm.valid) {
      this.flashMessagesService.show('Please fill in all fields', {
        cssClass:'alert-danger', timeout: 4000
      });
      this.router.navigate(['reactive-speakers/new'])
    } else {
      this.dataService.addSpeaker(this.speakerForm.value);
      this.flashMessagesService.show('New speaker added.', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['reactive-speakers'])
    }
  }

  setNotification(mode: string): void {
    const phoneCtrl = this.speakerForm.get('phone');
    const emailCtrl = this.speakerForm.get('email');

    phoneCtrl.clearValidators();
    emailCtrl.clearValidators();

    emailCtrl.setValidators([Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]);
    phoneCtrl.setValidators([Validators.minLength(10)]);

    if (mode == 'email') {
      emailCtrl.setValidators([Validators.required]);
    } else {
      phoneCtrl.setValidators([Validators.required]);
    }

    emailCtrl.updateValueAndValidity();
    phoneCtrl.updateValueAndValidity();
  }
}
