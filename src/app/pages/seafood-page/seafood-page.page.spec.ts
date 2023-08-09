import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeafoodPagePage } from './seafood-page.page';

describe('SeafoodPagePage', () => {
  let component: SeafoodPagePage;
  let fixture: ComponentFixture<SeafoodPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeafoodPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
