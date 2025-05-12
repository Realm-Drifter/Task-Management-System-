import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        connect-src 'self' http://localhost:8000 ws: wss:;
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' http://localhost:8000 data: blob: *;
      `.replace(/\n/g, ""), // compact the CSP into one line
    },
  },
});
