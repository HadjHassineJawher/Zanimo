import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsinfoComponent } from './postsinfo.component';

describe('PostsinfoComponent', () => {
  let component: PostsinfoComponent;
  let fixture: ComponentFixture<PostsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
