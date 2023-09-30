import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUserComponent } from './tab-user.component';

describe('TabUserComponent', () => {
  let component: TabUserComponent;
  let fixture: ComponentFixture<TabUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabUserComponent]
    });
    fixture = TestBed.createComponent(TabUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
