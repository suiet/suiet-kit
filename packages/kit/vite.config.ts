import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteSvgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [react(), vanillaExtractPlugin(), viteSvgr()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  esbuild: {
    target: "es2020",
    pure: mode === 'production' ? ['console.log', 'debugger'] : [],
  },
  optimizeDeps: {
    esbuildOptions : {
      target: "es2020"
    }
  },
  build: {
    target: 'es2020',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      name: 'suietWalletKit'
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', '@mysten/sui.js'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps.
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mysten/sui.js': 'Sui'
        },
      },
    },
  },
}));
