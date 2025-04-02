import { describe, it, expect } from 'vitest';
import { testFunctionForCheckVitestWorking } from '@/lib/api-client';

describe('api-client', () => {
  it('should pass', () => {
    const cases = ['test', 'test2', 'test3'];
    cases.forEach((c) => {
      const actual = testFunctionForCheckVitestWorking(c);
      expect(actual).toBe(`test is working fine: argument is ${c}`);
    });
  });
});
