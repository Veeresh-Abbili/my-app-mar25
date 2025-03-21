import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatvehicleComponent } from './creatvehicle.component';

describe('CreatvehicleComponent', () => {
  let component: CreatvehicleComponent;
  let fixture: ComponentFixture<CreatvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatvehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
