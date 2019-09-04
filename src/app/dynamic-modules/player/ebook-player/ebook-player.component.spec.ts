import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookPlayerComponent } from './ebook-player.component';

describe('EbookPlayerComponent', () => {
  let component: EbookPlayerComponent;
  let fixture: ComponentFixture<EbookPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
