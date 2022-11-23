import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { Public } from '../decorators/Public';
import { HubspotGuard } from '../guards/hubspot-auth.guard';
import { AuthService } from '../services/auth.service';
import { HubspotService } from '../services/hubspot.service';

@Controller('auth/hubspot')
export class HubspotController {
  constructor(
    private readonly authService: AuthService,
    private readonly hubspotService: HubspotService,
  ) {}

  @Public()
  @UseGuards(HubspotGuard)
  @Get('sign-in')
  signIn() {
    return 'redirecting...';
  }

  @Public()
  @Get('callback')
  async callback(@Query('code') code: string) {
    try {
      /* get hubspot tokens with code */
      const hubspotSignData = await this.hubspotService.getHubspotTokenByCode(
        code,
      );

      /* generate jwt token  */
      const loginData = this.authService.allowLogin({
        hubspot: {
          accessToken: hubspotSignData.accessToken,
          refreshToken: hubspotSignData.refreshToken,
        },
      });

      return loginData;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
