import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormModalComponent } from './signup-form-modal.component';

describe('SignupFormModalComponent', () => {
  let component: SignupFormModalComponent;
  let fixture: ComponentFixture<SignupFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
