import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookmarksComponent } from './edit-bookmarks.component';

describe('EditBookmarksComponent', () => {
  let component: EditBookmarksComponent;
  let fixture: ComponentFixture<EditBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
