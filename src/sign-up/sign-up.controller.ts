import {Body, Controller, Post} from '@nestjs/common';
import {UserCreateDto} from "../user/dto/user-create.dto";
import {UserService} from "../user/user.service";
import {AllowAny} from "../authentication/allow-any";

@Controller('sign-up')
export class SignUpController {
    constructor(private readonly userService: UserService) {
    }

    @AllowAny()
    @Post()
    async signUp(@Body() userCreateDto: UserCreateDto) {
        return await this.userService.createUser(userCreateDto);
    }
}
