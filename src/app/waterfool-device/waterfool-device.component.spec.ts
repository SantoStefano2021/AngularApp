import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfoolDeviceComponent } from './waterfool-device.component';

describe('WaterfoolDeviceComponent', () => {
  let component: WaterfoolDeviceComponent;
  let fixture: ComponentFixture<WaterfoolDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfoolDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfoolDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
