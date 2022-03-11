import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../entities/user.entity";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([UserEntity]), PassportModule, JwtModule.register({
        secret: process.env.TOKEN_SECRET,
        signOptions: {
          expiresIn: process.env.TOKEN_EXPIRE_TIME,
        },
  })],
  providers: [AuthenticationService, JwtStrategy],
  exports: [AuthenticationService]
})
export class AuthenticationModule {}
