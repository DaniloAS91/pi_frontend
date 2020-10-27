import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdComponent } from './dropd.component';

describe('DropdComponent', () => {
  let component: DropdComponent;
  let fixture: ComponentFixture<DropdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
