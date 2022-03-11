import {Body, Controller, Post} from '@nestjs/common';
import {AuthenticationService} from "../authentication/authentication.service";
import {SignInDto} from "./dto/sign-in.dto";
import {AllowAny} from "../authentication/allow-any";

@Controller('sign-in')
export class SignInController {
    constructor(private readonly authenticationService: AuthenticationService) {
    }

    @AllowAny()
    @Post()
    async signIn(@Body() signInDto: SignInDto) {
        return await this.authenticationService.login(signInDto.email, signInDto.password);
    }
}
