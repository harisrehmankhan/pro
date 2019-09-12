import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestDetailComponent } from './dest-detail.component';

describe('DestDetailComponent', () => {
  let component: DestDetailComponent;
  let fixture: ComponentFixture<DestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
