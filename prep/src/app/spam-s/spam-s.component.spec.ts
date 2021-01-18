import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamSComponent } from './spam-s.component';

describe('SpamSComponent', () => {
  let component: SpamSComponent;
  let fixture: ComponentFixture<SpamSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpamSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
