import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteExpertComponent } from './popup-delete-expert.component';

describe('PopupDeleteExpertComponent', () => {
  let component: PopupDeleteExpertComponent;
  let fixture: ComponentFixture<PopupDeleteExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeleteExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
