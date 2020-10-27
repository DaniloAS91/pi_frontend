import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFeedPageComponent } from './dialog-feed-page.component';

describe('DialogFeedPageComponent', () => {
  let component: DialogFeedPageComponent;
  let fixture: ComponentFixture<DialogFeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFeedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
