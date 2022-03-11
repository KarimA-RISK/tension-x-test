import {Body, Controller, Post} from '@nestjs/common';
import {UserCreateDto} from "../user/dto/user-create.dto";
import {UserService} from "../user/user.service";

@Controller('sign-up')
export class SignUpController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    async signUp(@Body() userCreateDto: UserCreateDto) {
        return await this.userService.createUser(userCreateDto);
    }
}
