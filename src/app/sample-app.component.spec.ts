import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SampleAppAppComponent } from '../app/sample-app.component';

beforeEachProviders(() => [SampleAppAppComponent]);

describe('App: SampleApp', () => {
  it('should create the app',
      inject([SampleAppAppComponent], (app: SampleAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sample-app works!\'',
      inject([SampleAppAppComponent], (app: SampleAppAppComponent) => {
    expect(app.title).toEqual('sample-app works!');
  }));
});
