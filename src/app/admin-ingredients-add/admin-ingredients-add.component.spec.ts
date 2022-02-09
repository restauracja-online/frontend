import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngredientsAddComponent } from './admin-ingredients-add.component';

describe('AdminIngredientsViewComponent', () => {
  let component: AdminIngredientsAddComponent;
  let fixture: ComponentFixture<AdminIngredientsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIngredientsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIngredientsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
