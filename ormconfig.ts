import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

//TODO: use env here
const config: MysqlConnectionOptions = {
    name: 'default',
    host: '127.0.0.1',
    database: 'db',
    port: 7006,
    username: 'root',
    password: 'example',
    type: 'mysql',
    migrationsTableName: 'migrations',
    entities: ['dist/src/entities/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['dist/src/migrations/*{.ts,.js}'],
    cli: { migrationsDir: 'src/migrations' },
};

export default config;