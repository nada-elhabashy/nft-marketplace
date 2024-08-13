import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedArtistComponent } from './top-rated-artist.component';

describe('TopRatedArtistComponent', () => {
  let component: TopRatedArtistComponent;
  let fixture: ComponentFixture<TopRatedArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatedArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
