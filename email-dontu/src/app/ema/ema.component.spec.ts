import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaComponent } from './ema.component';

describe('EmaComponent', () => {
  let component: EmaComponent;
  let fixture: ComponentFixture<EmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
