import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmgtComponent } from './cmgt.component';

describe('CmgtComponent', () => {
  let component: CmgtComponent;
  let fixture: ComponentFixture<CmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
