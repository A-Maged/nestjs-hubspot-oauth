import { Strategy } from 'passport-hubspot';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HubSpotPassportStrategy extends PassportStrategy(
  Strategy,
  'hubSpot',
) {
  constructor(private configService: ConfigService) {
    /* strategy options */
    super({
      authorizationURL: configService.get('hubspot.authorizationURL'),
      clientID: configService.get('hubspot.clientId'),
      clientSecret: configService.get('hubspot.clientSecret'),
      callbackURL: configService.get('hubspot.redirectUri'),
      scope: configService.get('hubspot.scope'),
    });
  }
}
