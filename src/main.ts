import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import * as cors from 'cors';
import * as passport from 'passport';

import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.$connect();

  app.use(passport.initialize());

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  await app.listen(4000);
}
bootstrap();
