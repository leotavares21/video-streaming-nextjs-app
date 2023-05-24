import { UseGuards, Req } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guards/google-oauth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // @Query()
  // @UseGuards(GoogleOauthGuard)
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // async googleAuth() {}

  @Query(() => String)
  @UseGuards(GoogleOauthGuard)
  async googleAuthCallback(@Req() request: any) {
    const token = await this.authService.login(request.user);

    return { token };
  }
}
