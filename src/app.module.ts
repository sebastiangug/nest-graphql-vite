import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RootResolver } from './resolvers/root.resolver';

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
        };
        const origins = ['*'];
        config.cors = { origin: origins, credentials: true };
        config.path = 'graphql';
        return config;
      },
      inject: [],
    }),
  ],
  controllers: [],
  providers: [RootResolver],
})
export class AppModule {}
