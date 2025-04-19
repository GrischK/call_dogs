import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgo: true, // Optimise le SVG
        svgoConfig: {
          removeXMLProcInst: true, // Supprime la déclaration XML
          removeStyleElement: false, // Garde les styles internes (si nécessaire)
        },
      },
    }),
  ],
});
