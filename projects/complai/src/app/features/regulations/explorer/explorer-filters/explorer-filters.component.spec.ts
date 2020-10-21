import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerFiltersComponent } from './explorer-filters.component';

describe('ExplorerFiltersComponent', () => {
  let component: ExplorerFiltersComponent;
  let fixture: ComponentFixture<ExplorerFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorerFiltersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
