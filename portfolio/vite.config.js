import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// Mirror the public Vercel routes in development and production preview.
function serveLegalRoutes(server) {
  server.middlewares.use((request, _response, next) => {
    const url = new URL(request.url, "http://localhost");
    const route = url.pathname.replace(/\/$/, "");
    if (["/privacy", "/terms", "/data-deletion"].includes(route)) {
      request.url = `${route}/index.html${url.search}`;
    }
    next();
  });
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "public-legal-routes",
      configureServer: serveLegalRoutes,
      configurePreviewServer: serveLegalRoutes,
    },
  ],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        privacy: fileURLToPath(new URL("./privacy/index.html", import.meta.url)),
        terms: fileURLToPath(new URL("./terms/index.html", import.meta.url)),
        dataDeletion: fileURLToPath(new URL("./data-deletion/index.html", import.meta.url)),
      },
    },
  },
});
