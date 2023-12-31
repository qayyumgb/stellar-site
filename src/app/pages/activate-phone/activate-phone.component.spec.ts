import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePhoneComponent } from './activate-phone.component';

describe('ActivatePhoneComponent', () => {
  let component: ActivatePhoneComponent;
  let fixture: ComponentFixture<ActivatePhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatePhoneComponent]
    });
    fixture = TestBed.createComponent(ActivatePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
