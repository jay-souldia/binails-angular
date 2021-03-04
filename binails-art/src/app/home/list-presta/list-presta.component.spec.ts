import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrestaComponent } from './list-presta.component';

describe('ListPrestaComponent', () => {
  let component: ListPrestaComponent;
  let fixture: ComponentFixture<ListPrestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
