import { Injectable } from '@nestjs/common';
import { Client as hubspotClient } from '@hubspot/api-client';
import { ConfigService } from '@nestjs/config';
import { GetTokenByCodeResponse } from '../types';

@Injectable()
export class HubspotService {
  constructor(private configService: ConfigService) {}

  async getHubspotTokenByCode(code: string) {
    const { accessToken, refreshToken }: GetTokenByCodeResponse =
      await new hubspotClient().oauth.tokensApi.createToken(
        'authorization_code',
        code,
        this.configService.get('hubspot.redirectUri'),
        this.configService.get('hubspot.clientId'),
        this.configService.get('hubspot.clientSecret'),
      );

    return { accessToken, refreshToken };
  }
}
