import { Controller, Get, HttpCode, Req } from '@nestjs/common';

import { Request } from 'express';
import { Client as hubspotClient } from '@hubspot/api-client';
import { Public } from './auth/decorators/Public';

@Controller()
export class AppController {
  @Get('health-check')
  @Public()
  @HttpCode(200)
  health() {
    return 'healthy';
  }

  @Get('contacts')
  async listContacts(@Req() req: Request) {
    try {
      const client = new hubspotClient({
        accessToken: req.user?.hubspot.accessToken as string,
      });

      const data = await client.crm.contacts.getAll(1);

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
