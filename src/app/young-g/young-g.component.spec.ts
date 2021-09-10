import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungGComponent } from './young-g.component';

describe('YoungGComponent', () => {
  let component: YoungGComponent;
  let fixture: ComponentFixture<YoungGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoungGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
