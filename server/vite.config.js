export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://dalle-ai-server.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
});
