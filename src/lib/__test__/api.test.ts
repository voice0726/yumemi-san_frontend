import { describe, it, expect } from 'vitest';
import { getPopulationComposition, getPrefectures } from '@/lib/api';

describe('api client', () => {
  it('should get prefecture list', async () => {
    const { data, error, response } = await getPrefectures();
    expect(data).toBeDefined();
    expect(error).toBeUndefined();
    expect(response.status).toBe(200);
  });

  it('should get population', async () => {
    const { data, error, response } = await getPopulationComposition(1);
    expect(data).toBeTruthy();
    expect(error).toBeUndefined();
    expect(response.status).toBe(200);
  });

  it('should throw error for invalid prefecture code (upper boundary)', async () => {
    const { data, error, response } = await getPopulationComposition(48);
    expect(data).toBeUndefined();
    expect(error).toBeTruthy();
    expect(error).toBe('Not Found');
    expect(response.status).toBe(404);
  });

  it('should throw error for invalid prefecture code (lower boundary)', async () => {
    const { data, error, response } = await getPopulationComposition(0);
    expect(data).toBeUndefined();
    expect(error).toBeTruthy();
    expect(error).toBe('Not Found');
    expect(response.status).toBe(404);
  });
});
