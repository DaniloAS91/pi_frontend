import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTemasComponent } from './dropdown-temas.component';

describe('DropdownTemasComponent', () => {
  let component: DropdownTemasComponent;
  let fixture: ComponentFixture<DropdownTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownTemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
