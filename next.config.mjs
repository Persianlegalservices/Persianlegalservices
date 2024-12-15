/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'standalone',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  i18n: {
    locales: ["fa", "en"], // Define your supported languages here
    defaultLocale: "fa",
    localeDetection: false,
  },
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.rasta-shahr.com",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
    ],
  },
};



// import { fileURLToPath } from "url";
// import path from "path"; // Only import 'path' once

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["http://localhost:3000", "192.168.1.133"], // Update as needed
//   },
//   i18n: {
//     locales: ["fa", "en"], // Define your supported languages here
//     defaultLocale: "fa",
//     localeDetection: false,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   webpack: (config) => {
//     // Using __dirname properly
//     config.resolve.alias["@alias"] = path.join(__dirname, "your-directory");

//     return config;
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/:path*",
//         destination: "/fa/:path*", // Rewrite everything to the default locale
//       },
//     ];
//   },
// };

export default nextConfig;
