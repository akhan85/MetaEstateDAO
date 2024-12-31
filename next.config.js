/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  webpack: (config, { dev, isServer }) => {
    //Optimize 3D model loading
    config.module.rules.push({
      test: /\.(gltf|glb|babylon|obj|stl)$/,
      use: {
        loader: 'file-loader',
      },
    });
    // Optimize images
    config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: dev,
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      });
    return config;
  },
};

module.exports = nextConfig;