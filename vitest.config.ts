/// <reference types="vitest" />
import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.mts'],
    typecheck: {
      tsconfig: resolve(__dirname, 'tsconfig.json'),
    },
  },
});
