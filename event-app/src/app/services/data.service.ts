import { Injectable } from '@angular/core';

import { Speaker } from '../models/speaker';
@Injectable()
export class DataService {

  speakers: Speaker[];

  constructor() 
  { 
    
  }

  seedSpeakers() 
  {
    this.speakers = [
      { 
        id: 1,
        firstName: 'Homer',
        lastName: 'Simpson',
        title: 'Nuclear Safety Inspector',
        company: 'Springfield Nuclear Power Plant',
        email: 'doh@gmail.com',
        phone: '776-333-2993',
        twitter: '',
        photo: 'Homer_Simpson_200x200.jpg',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum suscipit felis, a mattis ex pulvinar ac. Sed efficitur facilisis nibh, a fringilla quam dapibus eu. Nunc tellus lectus, viverra at ante laoreet, gravida pulvinar massa. Maecenas vestibulum sit amet metus eget vehicula. Mauris id quam quam. Donec eu porttitor massa. Proin nisi nisi, vehicula id quam in, gravida dignissim urna. Donec malesuada sed justo vel pretium. Aenean posuere convallis lorem, eu porta ipsum dignissim quis. Nam lorem erat, hendrerit in porta in, finibus id neque.',
        sessionName: 'Angular 17',
        sessionDescription: 'What more can we add.'
        //sessions: []
      },
      {
        id: 2,
        firstName: 'Marge',
        lastName: 'Simpson',
        title: 'Secret Agent',
        company: 'CIA',
        email: 'marge123@gmail.com',
        phone: '888-333-4343',
        twitter: '',
        photo: 'Marge_Simpson_200x200.jpg',
        biography: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ut ultrices neque. In non rutrum enim. Nunc placerat rutrum nulla non luctus. Nulla facilisi. Sed est velit, iaculis lobortis ligula ut, molestie vestibulum dolor. Suspendisse gravida ullamcorper nunc, ac elementum lorem consectetur quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam consectetur purus sit amet velit convallis ultricies. Sed eu nunc purus. Sed pellentesque, dolor quis dictum auctor, tellus nisl congue tellus, vitae suscipit mi mi vitae nunc. Nulla feugiat libero tincidunt aliquet auctor. Donec luctus dapibus elementum. Proin risus augue, hendrerit a semper sed, ullamcorper quis ligula.',
        sessionName: '',
        sessionDescription: ''
        //sessions: []
      },
      { 
        id: 3,
        firstName: 'Bart',
        lastName: 'Simpson',
        title: 'Smart Alec Extraordinaire',
        company: 'Simpson Family Household',
        email: 'bman@gmail.com',
        phone: '999-555-1212',
        twitter: '',
        photo: 'Bart_Simpson_200x200.jpg',
        biography: 'Etiam tincidunt dolor nulla, sit amet vestibulum lectus feugiat et. Aenean quis vulputate tortor, eget ornare diam. Aenean porta sollicitudin quam, vitae sodales mi convallis eleifend. Vestibulum id auctor ipsum. Suspendisse malesuada nisl in imperdiet tempus. Maecenas sit amet erat posuere orci scelerisque consectetur. In quis purus ac sapien tincidunt blandit. Praesent nec quam gravida mauris molestie sodales ac et leo. Praesent eleifend lacinia nisl, id varius mi bibendum imperdiet. Nunc ut massa est. Curabitur augue lectus, luctus vitae mi et, fringilla feugiat urna. Vestibulum dolor massa, aliquet nec ultrices id, ornare nec orci. Ut tincidunt augue ut aliquam bibendum.',
        sessionName: '',
        sessionDescription: ''
        //sessions: []
      },
      {
        id: 4,
        firstName: 'Grandpa',
        lastName: 'Simpson',
        title: 'Guileless Huckster',
        company: 'Procter & Gamble',
        email: 'gramps@gmail.com',
        phone: '222-456-9822',
        twitter: '',
        photo: 'Grandpa_Simpson_200x200.jpg',
        biography: 'Vivamus euismod justo tellus, eget pulvinar lacus blandit id. Aliquam posuere ex et diam eleifend, eget dictum orci varius. Pellentesque sit amet justo ultricies, efficitur risus in, ultricies lectus. Nam in elementum est, id mattis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie purus mauris, at efficitur enim volutpat eget. Pellentesque dapibus ligula at neque faucibus, et egestas ipsum luctus. Aliquam dui magna, vestibulum nec ipsum nec, sodales pulvinar leo. Nullam hendrerit mollis nisi, quis viverra augue sagittis et. Maecenas sed vulputate nibh, vel scelerisque sem. Donec in elit non urna imperdiet feugiat eget sit amet turpis. Aenean massa neque, fermentum at aliquam sodales, feugiat quis dui. Etiam pulvinar purus commodo elit cursus, et auctor nulla auctor.',
        sessionName: '',
        sessionDescription: ''
        //sessions: []
      },
      { 
        id: 5,
        firstName: 'Lisa',
        lastName: 'Simpson',
        title: 'Brainchild',
        company: 'Simpson Family Household',
        email: 'lsimpson@gmail.com',
        phone: '123-456-7890',
        twitter: '',
        photo: 'Lisa_Simpson_200x200.jpg',
        biography: 'Nam at ligula sit amet purus imperdiet feugiat. Duis semper et sem sit amet blandit. In tincidunt arcu nisi. Vivamus lacinia nibh eu dui varius pharetra et non nisi. Maecenas dapibus quis quam varius tempus. Aenean suscipit ultrices nisl, ac luctus massa pharetra quis. Aliquam auctor ipsum a orci sodales, non rutrum mi semper. Phasellus scelerisque, ex in egestas auctor, magna turpis aliquam justo, quis facilisis magna dolor a diam. Phasellus elementum gravida eros, vitae dictum sapien aliquam sit amet. Duis mattis erat hendrerit neque malesuada, vitae accumsan urna dapibus. Donec eget mi dictum, fringilla eros sit amet, finibus urna. Fusce mollis commodo commodo. Nunc id rutrum magna.',
        sessionName: '',
        sessionDescription: ''
        //sessions: []
      },
      {
        id: 6,
        firstName: 'Maggie',
        lastName: 'Simpson',
        title: 'Card Dealer',
        company: 'Golden Nugget Casino',
        email: 'maggien@gmail.com',
        phone: '456-789-0123',
        twitter: '',
        photo: 'Maggie_Simpson_200x200.jpg',
        biography: 'Sed consectetur arcu efficitur ligula volutpat, eget congue eros ullamcorper. Nulla pulvinar lacus luctus velit imperdiet, eu condimentum tortor fringilla. Morbi sit amet viverra quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sit amet enim nec eros commodo vestibulum placerat sit amet nunc. Maecenas tempus diam id ex elementum aliquet. Duis semper lacinia porttitor. Nullam scelerisque ligula ut malesuada dapibus. Curabitur eros neque, pulvinar quis pulvinar ac, rutrum vitae lorem. Praesent blandit semper sem, eu accumsan nibh pharetra quis. Curabitur a ante ut odio egestas ullamcorper vitae id tortor. Mauris aliquam, lectus vitae laoreet suscipit, sem elit finibus quam, id sodales arcu libero ac tellus. Donec a magna ac ex vestibulum finibus ac eu libero. Duis interdum ultrices sem, vitae hendrerit erat rhoncus nec.',
        sessionName: '',
        sessionDescription: ''
        //sessions: []
      }
    ]
    localStorage.setItem('speakers', JSON.stringify(this.speakers));
  }

  getSpeakers(): Speaker[] 
  {
    if (localStorage.getItem('speakers') === null) { this.speakers = []; }
    else { this.speakers = JSON.parse(localStorage.getItem('speakers')); }
    return this.speakers;
  }

  getSpeaker(id:number): Speaker
  {
    let speakers:Speaker[] = this.getSpeakers();

    for(let i = 0; i < speakers.length; i++)
    {
      console.log(speakers[i],id);
      if(speakers[i].id == id) { 
        
        return speakers[i]; 
      }
    };
    console.log('returning null');
    return null;
  }

  addSpeaker(speaker:Speaker){

    let speakers;

    if(localStorage.getItem('speakers') === null) { speakers = []; }
    else { speakers = JSON.parse(localStorage.getItem('speakers')); }

    speaker.id = this.getMaxID(speakers);
    speaker.photo = "generic.jpg";

    speakers.unshift(speaker);
    localStorage.setItem('speakers', JSON.stringify(speakers));
  }

  getMaxID(speakers:Speaker[]): number
  {
    let nextId = 0;

    for(let i = 0; i < speakers.length; i++) 
    {
      if(speakers[i].id >= nextId) {
        nextId = speakers[i].id + 1;
      }
    }
    return nextId;
  }

  removeSpeaker(id:number) {

    let speakers = JSON.parse(localStorage.getItem('speakers'));

    for(let i = 0; i < speakers.length; i++)
    {
      if(speakers[i].id === id) 
      {
        speakers.splice(i, 1);
        localStorage.setItem('speakers', JSON.stringify(speakers));
      }
    };
  }

}
