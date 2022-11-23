import {
  ExtractJwt,
  Strategy,
  StrategyOptions,
  VerifyCallback,
} from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.secret'),
    } as StrategyOptions);
  }

  /* @override */
  validate: VerifyCallback = async (payload: any) => {
    /* jwt is already validated, 
       but you can do more validation here  */

    /* return value is attached to current request as "user" */
    return payload;
  };
}
