import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCarddetailsComponent } from './id-carddetails.component';

describe('IdCarddetailsComponent', () => {
  let component: IdCarddetailsComponent;
  let fixture: ComponentFixture<IdCarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCarddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
