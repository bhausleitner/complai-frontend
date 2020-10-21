import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyComplaiComponent } from './why-complai.component';

describe('WhyComplaiComponent', () => {
  let component: WhyComplaiComponent;
  let fixture: ComponentFixture<WhyComplaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhyComplaiComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyComplaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
