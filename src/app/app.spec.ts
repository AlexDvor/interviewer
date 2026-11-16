import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter, Router } from '@angular/router';
import { LESSONS } from './lessons/lesson-registry';
import { routes } from './app.routes';
import { RouterTestingHarness } from '@angular/router/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should open the catalog at the root URL', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'Твій наступний',
    );
  });

  for (const lesson of LESSONS) {
    it(`should open the catalog link for ${lesson.path}`, async () => {
      const harness = await RouterTestingHarness.create('/');
      const path = `/lessons/${lesson.path}`;
      const link = harness.routeNativeElement?.querySelector<HTMLAnchorElement>(
        `a[href="${path}"]`,
      );
      expect(link).toBeTruthy();
      link!.click();
      await harness.fixture.whenStable();
      expect(TestBed.inject(Router).url).toBe(path);
      expect(harness.routeNativeElement?.querySelector('a[routerLink="/"]')?.textContent).toContain(
        'Каталог завдань',
      );
    });
  }

  it('should preserve the old profile URL', async () => {
    await RouterTestingHarness.create('/profile-lab');
    expect(TestBed.inject(Router).url).toBe('/lessons/profile-editor');
  });

  it('should redirect an unknown URL to the catalog', async () => {
    await RouterTestingHarness.create('/unknown-lesson');
    expect(TestBed.inject(Router).url).toBe('/');
  });
});
