import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWatchComponent } from './detail-watch.component';

describe('DetailWatchComponent', () => {
  let component: DetailWatchComponent;
  let fixture: ComponentFixture<DetailWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
