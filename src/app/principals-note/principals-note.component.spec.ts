import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsNoteComponent } from './principals-note.component';

describe('PrincipalsNoteComponent', () => {
  let component: PrincipalsNoteComponent;
  let fixture: ComponentFixture<PrincipalsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalsNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
