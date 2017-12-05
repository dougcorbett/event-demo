import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSpeakerEditComponent } from './reactive-speaker-edit.component';

describe('ReactiveSpeakerEditComponent', () => {
  let component: ReactiveSpeakerEditComponent;
  let fixture: ComponentFixture<ReactiveSpeakerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSpeakerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSpeakerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
