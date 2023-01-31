import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListItemDetailComponent } from './movie-list-item-detail.component';

describe('MovieListItemDetailComponent', () => {
  let component: MovieListItemDetailComponent;
  let fixture: ComponentFixture<MovieListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
