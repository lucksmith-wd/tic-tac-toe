import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import htmlPurge from "vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPurge()],
});
