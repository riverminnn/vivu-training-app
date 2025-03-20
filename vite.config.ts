import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 10000, // Ensure it binds to Render's assigned port
    strictPort: true
  },
  preview: {
    allowedHosts: ['vivu-training-app.onrender.com'] // Add your Render domain here
  }
});
