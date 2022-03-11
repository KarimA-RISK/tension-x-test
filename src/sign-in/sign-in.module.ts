import { Module } from '@nestjs/common';
import { SignInController } from './sign-in.controller';
import {AuthenticationModule} from "../authentication/authentication.module";

@Module({
  imports: [AuthenticationModule],
  controllers: [SignInController]
})
export class SignInModule {}
