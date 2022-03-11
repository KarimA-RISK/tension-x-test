import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {Roles} from "../authorization/roles.decorator";
import {Role} from "../authorization/role.enum";

@Controller('pages')
export class PagesController {

    @Get('/guest')
    @Roles(Role.Guest, Role.User, Role.Supervisor, Role.Admin)
    async guest(@Req() req) {
        return { message: "Guest tab" };
    }

    @Get('/user')
    @Roles(Role.User, Role.Supervisor, Role.Admin)
    async user() {
        return { message: "User tab" };
    }

    @Get('/supervisor')
    @Roles(Role.Supervisor, Role.Admin)
    async supervisor() {
        return { message: "Supervisor tab" };
    }

    @Get('/admin')
    @Roles(Role.Admin)
    async admin() {
        return { message: "Admin tab" };
    }
}
