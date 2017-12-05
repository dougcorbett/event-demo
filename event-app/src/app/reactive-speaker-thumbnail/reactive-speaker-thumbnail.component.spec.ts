import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSpeakerThumbnailComponent } from './reactive-speaker-thumbnail.component';

describe('ReactiveSpeakerThumbnailComponent', () => {
  let component: ReactiveSpeakerThumbnailComponent;
  let fixture: ComponentFixture<ReactiveSpeakerThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSpeakerThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSpeakerThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
