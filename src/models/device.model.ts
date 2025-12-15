import {Entity, model, property} from '@loopback/repository';

@model()
export class Device extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  fcmToken: string;

  @property({
    type: 'string',
    required: false,
  })
  platform?: string;

  constructor(data?: Partial<Device>) {
    super(data);
  }
}

export interface DeviceRelations {
}

export type DeviceWithRelations = Device & DeviceRelations;
