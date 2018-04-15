import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainBarComponent } from './main-bar.component';

describe('AppMainBarComponent', () => {
  let component: AppMainBarComponent;
  let fixture: ComponentFixture<AppMainBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
