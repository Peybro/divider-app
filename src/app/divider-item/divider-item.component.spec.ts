import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerItemComponent } from './divider-item.component';

describe('DividerItemComponent', () => {
  let component: DividerItemComponent;
  let fixture: ComponentFixture<DividerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
