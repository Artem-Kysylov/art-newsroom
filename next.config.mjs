import path from 'path';
import { fileURLToPath } from 'url';

// Определяем __filename и __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cdn.sanity.io'],
  }
};

export default nextConfig;
