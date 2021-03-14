import { testing } from '@wallaby-issue/testing';

describe('testingTest', () => {
  it('should work', () => {
    expect(testing()).toEqual('testing');
  });
});
