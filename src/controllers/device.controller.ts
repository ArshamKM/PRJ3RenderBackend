

import {post, requestBody} from '@loopback/rest';
import {repository} from '@loopback/repository';
import {Device} from '../models/device.model';
import {DeviceRepository} from '../repositories/device.repository';

export class DeviceController {
  constructor(
    @repository(DeviceRepository)
    public deviceRepo: DeviceRepository,
  ) {}

  @post('/devices/register', {
    responses: {
      '200': {
        description: 'Register device for push notifications',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                id: {type: 'number'},
                userId: {type: 'string'},
                fcmToken: {type: 'string'},
                platform: {type: 'string'},
              },
            },
          },
        },
      },
    },
  })
  async registerDevice(
    @requestBody({
      description: 'Send the Firebase token for this device',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['userId', 'fcmToken'],
            properties: {
              userId: {type: 'string'},
              fcmToken: {type: 'string'},
              platform: {type: 'string'},
            },
          },
        },
      },
    })
    body: {userId: string; fcmToken: string; platform?: string},
  ): Promise<Device> {
    const existing = await this.deviceRepo.findOne({
      where: {userId: body.userId, fcmToken: body.fcmToken},
    });

    if (existing) {
      return existing;
    }

    const created = await this.deviceRepo.create({
      userId: body.userId,
      fcmToken: body.fcmToken,
      platform: body.platform ?? 'android',
    });

    return created;
  }
}