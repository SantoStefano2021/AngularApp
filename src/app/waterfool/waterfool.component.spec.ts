import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfoolComponent } from './waterfool.component';

describe('WaterfoolComponent', () => {
  let component: WaterfoolComponent;
  let fixture: ComponentFixture<WaterfoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
