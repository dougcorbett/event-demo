import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSpeakerListComponent } from './reactive-speaker-list.component';

describe('ReactiveSpeakerListComponent', () => {
  let component: ReactiveSpeakerListComponent;
  let fixture: ComponentFixture<ReactiveSpeakerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSpeakerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSpeakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
