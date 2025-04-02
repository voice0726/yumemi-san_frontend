import { API_HOST, API_KEY } from '@/config';
import createClient from 'openapi-fetch';
import { paths } from '@/lib/api/v1';

const authHeaders = {
  'X-API-KEY': API_KEY,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const client = createClient<paths>({ baseUrl: API_HOST, headers: authHeaders });

export async function getPrefectures() {
  return await client.GET('/api/v1/prefectures', {});
}

export async function getPopulationComposition(prefCode: number) {
  return await client.GET('/api/v1/population/composition/perYear', {
    params: { query: { prefCode: String(prefCode) } },
  });
}
