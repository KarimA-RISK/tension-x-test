import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

//TODO: use env here
const config: MysqlConnectionOptions = {
    name: 'default',
    host: 'mysql-database',
    database: 'db',
    port: 3306,
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