/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include the paths to all files that contain Nativewind classes
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Example: Add your custom colors here
        brand: {
          DEFAULT: "#EF8A17", // main brand color
          opacity80:"#EF8A1780",
          opacity20:"#EF8A1720",
          // dark: "#15803d", // optional darker shade
          // light: "#22c55e", // optional lighter shade
        },
      },
    },
  },
  plugins: [],
};
