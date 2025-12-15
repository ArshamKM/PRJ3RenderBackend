import { Entity } from '@loopback/repository';
export declare class Device extends Entity {
    id?: number;
    userId: string;
    fcmToken: string;
    platform?: string;
    constructor(data?: Partial<Device>);
}
export interface DeviceRelations {
}
export type DeviceWithRelations = Device & DeviceRelations;
