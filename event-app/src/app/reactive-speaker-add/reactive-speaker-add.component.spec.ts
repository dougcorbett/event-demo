import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSpeakerAddComponent } from './reactive-speaker-add.component';

describe('ReactiveSpeakerAddComponent', () => {
  let component: ReactiveSpeakerAddComponent;
  let fixture: ComponentFixture<ReactiveSpeakerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSpeakerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSpeakerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
