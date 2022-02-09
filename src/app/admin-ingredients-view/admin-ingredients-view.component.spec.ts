import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngredientsViewComponent } from './admin-ingredients-view.component';

describe('AdminIngredientsViewComponent', () => {
  let component: AdminIngredientsViewComponent;
  let fixture: ComponentFixture<AdminIngredientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIngredientsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIngredientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
