import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsListItemsComponent } from './publications-list-items.component';

describe('PublicationsListItemsComponent', () => {
  let component: PublicationsListItemsComponent;
  let fixture: ComponentFixture<PublicationsListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
