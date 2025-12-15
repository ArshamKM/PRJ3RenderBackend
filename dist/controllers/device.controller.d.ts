import { Device } from '../models/device.model';
import { DeviceRepository } from '../repositories/device.repository';
export declare class DeviceController {
    deviceRepo: DeviceRepository;
    constructor(deviceRepo: DeviceRepository);
    registerDevice(body: {
        userId: string;
        fcmToken: string;
        platform?: string;
    }): Promise<Device>;
}
