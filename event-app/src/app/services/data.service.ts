import { Injectable } from '@angular/core';

import { Speaker } from '../models/speaker';
@Injectable()
export class DataService {

  speakers: Speaker[];

  constructor() 
  { 
    this.speakers = [
      { 
        id: 1,
        firstName: 'Homer',
        lastName: 'Simpson',
        title: 'Nuclear Safety Inspector',
        company: 'Springfield Nuclear Power Plant',
        twitter: '',
        photo: 'Homer_Simpson_200x200.jpg',
        biography: '',
        sessions: []
      },
      {
        id: 2,
        firstName: 'Marge',
        lastName: 'Simpson',
        title: 'Secret Agent',
        company: 'CIA',
        twitter: '',
        photo: 'Marge_Simpson_200x200.jpg',
        biography: '',
        sessions: []
      },
      { 
        id: 3,
        firstName: 'Bart',
        lastName: 'Simpson',
        title: 'Smart Alec Extraordinaire',
        company: 'Simpson Family Household',
        twitter: '',
        photo: 'Bart_Simpson_200x200.jpg',
        biography: '',
        sessions: []
      },
      {
        id: 4,
        firstName: 'Grandpa',
        lastName: 'Simpson',
        title: 'Guileless Huckster',
        company: 'Procter & Gamble',
        twitter: '',
        photo: 'Grandpa_Simpson_200x200.jpg',
        biography: '',
        sessions: []
      },
      { 
        id: 5,
        firstName: 'Lisa',
        lastName: 'Simpson',
        title: 'Brainchild',
        company: 'Simpson Family Household',
        twitter: '',
        photo: 'Lisa_Simpson_200x200.jpg',
        biography: '',
        sessions: []
      },
      {
        id: 6,
        firstName: 'Maggie',
        lastName: 'Simpson',
        title: 'Card Dealer',
        company: 'Golden Nugget Casino',
        twitter: '',
        photo: 'Maggie_Simpson_200x200.jpg',
        biography: '',
        sessions: []
      }
    ]
  }

  getSpeakers(): Speaker[] 
  {
    return this.speakers;
  }

}
