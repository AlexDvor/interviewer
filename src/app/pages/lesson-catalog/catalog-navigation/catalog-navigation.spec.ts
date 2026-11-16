import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CatalogNavigation } from './catalog-navigation';

describe('CatalogNavigation', () => {
  let component: CatalogNavigation;
  let fixture: ComponentFixture<CatalogNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogNavigation],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
