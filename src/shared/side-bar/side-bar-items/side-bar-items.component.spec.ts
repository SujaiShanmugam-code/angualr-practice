import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarItemsComponent } from './side-bar-items.component';

describe('SideBarItemsComponent', () => {
  let component: SideBarItemsComponent;
  let fixture: ComponentFixture<SideBarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
