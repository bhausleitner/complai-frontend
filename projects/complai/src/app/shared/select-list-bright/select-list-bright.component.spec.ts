import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectListBrightComponent } from './select-list-bright.component';

describe('SelectListBrightComponent', () => {
  let component: SelectListBrightComponent;
  let fixture: ComponentFixture<SelectListBrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectListBrightComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectListBrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
