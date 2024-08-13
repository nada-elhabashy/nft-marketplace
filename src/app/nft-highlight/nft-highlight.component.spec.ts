import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftHighlightComponent } from './nft-highlight.component';

describe('NftHighlightComponent', () => {
  let component: NftHighlightComponent;
  let fixture: ComponentFixture<NftHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NftHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
