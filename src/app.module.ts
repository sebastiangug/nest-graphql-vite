import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RootResolver } from './resolvers/root.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [],
      useFactory: () => {
        const config: ApolloDriverConfig = {
          debug: true,
          playground: true,
          autoSchemaFile: 'schema.gql',
          sortSchema: true,
          path: join(process.cwd(), 'src/graphql.ts'),
          cors: {
            origin: ['*'],
          },
        };
        return config;
      },
      inject: [],
    }),
  ],
  controllers: [],
  providers: [RootResolver],
})
export class AppModule {}
