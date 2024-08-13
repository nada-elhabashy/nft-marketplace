import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMoreComponent } from './discover-more.component';

describe('DiscoverMoreComponent', () => {
  let component: DiscoverMoreComponent;
  let fixture: ComponentFixture<DiscoverMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
