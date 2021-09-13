import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWatchComponent } from './form-watch.component';

describe('FormWatchComponent', () => {
  let component: FormWatchComponent;
  let fixture: ComponentFixture<FormWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
