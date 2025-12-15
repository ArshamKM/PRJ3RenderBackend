import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Device, DeviceRelations} from '../models/device.model';
import {DbDataSource} from '../datasources';

export class DeviceRepository extends DefaultCrudRepository<
  Device,
  typeof Device.prototype.id,
  DeviceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Device, dataSource);
  }
}
