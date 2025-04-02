function mustGetEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const API_HOST = mustGetEnv('API_HOST');
export const API_KEY = mustGetEnv('API_KEY');
