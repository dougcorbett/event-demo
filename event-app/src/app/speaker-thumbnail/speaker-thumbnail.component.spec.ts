import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerThumbnailComponent } from './speaker-thumbnail.component';

describe('SpeakerThumbnailComponent', () => {
  let component: SpeakerThumbnailComponent;
  let fixture: ComponentFixture<SpeakerThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
