import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import {UserModule} from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [SignUpController]
})
export class SignUpModule {}
