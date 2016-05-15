import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Contact} from './contact.model';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact()).toBeTruthy();
  });
});
