import { Controller, Get, Req } from '@nestjs/common';

import { Request } from 'express';
import { Client as hubspotClient } from '@hubspot/api-client';

@Controller()
export class AppController {
  @Get('protected')
  async protectedRoute(@Req() req: Request) {
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
