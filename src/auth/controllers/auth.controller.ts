import { Controller, Get, Render } from '@nestjs/common';
import { Public } from '../decorators/Public';

@Controller('auth')
export class AuthController {
  @Public()
  @Get('sign-in')
  @Render('auth/signIn')
  signInForm() {
    return '';
  }
}
