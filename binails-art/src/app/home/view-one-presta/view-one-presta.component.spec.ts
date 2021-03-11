import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnePrestaComponent } from './view-one-presta.component';

describe('ViewOnePrestaComponent', () => {
  let component: ViewOnePrestaComponent;
  let fixture: ComponentFixture<ViewOnePrestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnePrestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnePrestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
