import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { SignInModule } from './sign-in/sign-in.module';
import { PagesModule } from './pages/pages.module';
import { AuthenticationModule } from './authentication/authentication.module';
import config from "../ormconfig";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./authorization/roles.guard";
import { JwtAuthGuard } from "./authentication/jwt-auth.guard";

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRoot(config),
      UserModule,
      SignUpModule,
      SignInModule,
      PagesModule,
      AuthenticationModule,
  ],
  controllers: [],
  providers: [ {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
  }, {
      provide: APP_GUARD,
      useClass: RolesGuard,
  }],
})
export class AppModule {}