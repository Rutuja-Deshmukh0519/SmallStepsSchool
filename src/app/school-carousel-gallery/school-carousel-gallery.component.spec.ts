import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCarouselGalleryComponent } from './school-carousel-gallery.component';

describe('SchoolCarouselGalleryComponent', () => {
  let component: SchoolCarouselGalleryComponent;
  let fixture: ComponentFixture<SchoolCarouselGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolCarouselGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolCarouselGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
