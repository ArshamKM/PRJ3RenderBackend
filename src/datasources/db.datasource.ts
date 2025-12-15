import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'db';

  constructor(
      @inject('datasources.config.db', {optional: true})
          dsConfig: object = {
        name: 'db',
        connector: 'postgresql',
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        // 👇 ESTA LÍNEA DESACTIVA MIGRACIONES Y EVITA EL ERROR
        migrations: false,
      },
  ) {
    super(dsConfig);
  }
}