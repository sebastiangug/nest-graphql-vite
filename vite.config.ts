import { ConfigEnv, defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }: ConfigEnv) => {
  return {
    build: {
      target: 'es2020',
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    server: {
      port: 3100,
    },
    optimizeDeps: {
      exclude: [
        '@nestjs/platform-socket.io',
        '@nestjs/express',
        '@nestjs/websockets',
        '@nestjs/microservices',
        '@nestjs/graphql',
        '@nestjs/apollo',
        '@nestjs/core',
        'cache-manager',
        'class-transformer',
        'class-validator',
        'graphql',
        '@nestjs/express',
        '@nestjs/graphql',
        '@nestjs/apollo',
        '@nestjs/core',
        'cache-manager',
        'class-transformer',
        'class-validator',
        'graphql',
        '@apollo/federation',
        '@apollo/gateway',
        '@apollo/subgraph',
        'apollo-server-express',
      ],
    },
    plugins: [
      tsconfigPaths(),
      ...VitePluginNode({
        adapter: 'nest',
        appPath: './src/main.ts',
        tsCompiler: 'swc',
        swcOptions: {
          jsc: {
            parser: {
              decorators: true,
              syntax: 'typescript',
              dynamicImport: true,
            },
            transform: {
              decoratorMetadata: true,
            },
          },
        },
        appName: 'graphql-server',
      }),
    ],
  };
});
