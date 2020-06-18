import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paragraph2nounComponent } from './paragraph2noun.component';

describe('Paragraph2nounComponent', () => {
  let component: Paragraph2nounComponent;
  let fixture: ComponentFixture<Paragraph2nounComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paragraph2nounComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paragraph2nounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
