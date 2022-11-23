import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../types';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  allowLogin(payload: User) {
    return { accessToken: this.jwtService.sign(payload) };
  }
}
