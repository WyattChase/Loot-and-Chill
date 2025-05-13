import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        roguelike: ['"Honk"', 'cursive'],
      },
    },
  },
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
