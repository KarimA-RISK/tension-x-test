import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

//TODO: use env here
const config: MysqlConnectionOptions = {
    name: 'default',
    host: '127.0.0.1',
    port: 7006,
    username: 'root',
    password: 'example',
    entities: [],
    synchronize: false,
    migrations: [
        'dist/src/entities/*.entity{.ts,.js}',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    },
    type: 'mysql'
};

export default config;
