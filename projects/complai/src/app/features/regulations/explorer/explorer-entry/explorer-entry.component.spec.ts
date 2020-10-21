import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerEntryComponent } from './explorer-entry.component';

describe('ExplorerEntryComponent', () => {
  let component: ExplorerEntryComponent;
  let fixture: ComponentFixture<ExplorerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExplorerEntryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
