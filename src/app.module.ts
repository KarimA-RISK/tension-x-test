import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from "../ormconfig";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRoot(config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
