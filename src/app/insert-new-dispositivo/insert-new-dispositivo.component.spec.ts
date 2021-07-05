import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNewDispositivoComponent } from './insert-new-dispositivo.component';

describe('InsertNewDispositivoComponent', () => {
  let component: InsertNewDispositivoComponent;
  let fixture: ComponentFixture<InsertNewDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNewDispositivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNewDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
