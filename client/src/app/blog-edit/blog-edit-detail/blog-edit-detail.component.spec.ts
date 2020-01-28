import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditDetailComponent } from './blog-edit-detail.component';

describe('BlogEditDetailComponent', () => {
  let component: BlogEditDetailComponent;
  let fixture: ComponentFixture<BlogEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
