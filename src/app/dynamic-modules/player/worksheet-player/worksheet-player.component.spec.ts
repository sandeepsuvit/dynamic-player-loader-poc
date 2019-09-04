import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetPlayerComponent } from './worksheet-player.component';

describe('WorksheetPlayerComponent', () => {
  let component: WorksheetPlayerComponent;
  let fixture: ComponentFixture<WorksheetPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksheetPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksheetPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
