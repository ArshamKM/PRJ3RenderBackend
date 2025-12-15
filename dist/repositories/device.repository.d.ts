import { DefaultCrudRepository } from '@loopback/repository';
import { Device, DeviceRelations } from '../models/device.model';
import { DbDataSource } from '../datasources';
export declare class DeviceRepository extends DefaultCrudRepository<Device, typeof Device.prototype.id, DeviceRelations> {
    constructor(dataSource: DbDataSource);
}
