import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { RootResolver } from './resolvers/root.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      imports: [],
      useFactory: () => {
        const config: ApolloFederationDriverConfig = {
          debug: true,
          playground: true,
          autoSchemaFile: 'schema.gql',
          sortSchema: true,
          path: '/graphql',
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
