import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Listen on all network interfaces
    port: 5173,        // Use a custom port if needed
    strictPort: true,  // Ensure Vite uses this port
  },
  build: {
    outDir: 'build',    // Set the output directory for the build
  }
});
