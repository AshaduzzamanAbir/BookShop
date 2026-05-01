// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import daisyui from "daisyui";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     tailwindcss({
//       config: {
//         plugins: [daisyui],
//       },
//     }),
//     react(),
//   ],
// });

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  darkMode: "class",
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/book": "http://localhost:3000",
      "/user/singup": "http://localhost:3000",
    },
  },
});
