import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteTagComponent } from './popup-delete-tag.component';

describe('PopupDeleteTagComponent', () => {
  let component: PopupDeleteTagComponent;
  let fixture: ComponentFixture<PopupDeleteTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeleteTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeleteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
