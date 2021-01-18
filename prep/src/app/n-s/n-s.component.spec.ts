import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSComponent } from './n-s.component';

describe('NSComponent', () => {
  let component: NSComponent;
  let fixture: ComponentFixture<NSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
