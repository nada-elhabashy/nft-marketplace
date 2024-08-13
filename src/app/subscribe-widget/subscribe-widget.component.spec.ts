import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeWidgetComponent } from './subscribe-widget.component';

describe('SubscribeWidgetComponent', () => {
  let component: SubscribeWidgetComponent;
  let fixture: ComponentFixture<SubscribeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
