import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PrismaModule } from 'src/prisma/prisma.module';

import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'SEU_JWT_SECRET',
    }),
  ],
  providers: [AuthResolver, AuthService, GoogleStrategy],
})
export class AuthModule {}
