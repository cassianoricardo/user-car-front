import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCarComponent } from './tab-car.component';

describe('TabCarComponent', () => {
  let component: TabCarComponent;
  let fixture: ComponentFixture<TabCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabCarComponent]
    });
    fixture = TestBed.createComponent(TabCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
