import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Request, Response } from 'express';
import { AppModule } from './app.module';

const getApp = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(AppModule);

  app.use('/health', (req: Request, res: Response) => {
    return res.status(200).send();
  });

  return app;
};

if (process.env.ENVIRONMENT) {
  async function bootstrap(): Promise<void> {
    const app = await getApp();
    await app.listen(process.env.PORT);
  }
  bootstrap();
}

export const viteNodeApp = getApp();
