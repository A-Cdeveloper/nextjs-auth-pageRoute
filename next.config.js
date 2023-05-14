/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MYSQL_HOST: 'localhost',
    MYSQL_PORT: '3306',
    MYSQL_DATABASE: 'next-auth',
    MYSQL_USER: 'root',
    MYSQL_PASSWORD: '',
  },
};

module.exports = nextConfig;
