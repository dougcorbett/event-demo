import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSpeakerDetailComponent } from './reactive-speaker-detail.component';

describe('ReactiveSpeakerDetailComponent', () => {
  let component: ReactiveSpeakerDetailComponent;
  let fixture: ComponentFixture<ReactiveSpeakerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSpeakerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSpeakerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
