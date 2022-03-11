import {Controller, Get} from '@nestjs/common';

@Controller('pages')
export class PagesController {
    @Get('/guest')
    async guest() {
        return { message: "Guest tab" };
    }

    @Get('/user')
    async user() {
        return { message: "User tab" };
    }

    @Get('/supervisor')
    async supervisor() {
        return { message: "Supervisor tab" };
    }

    @Get('/admin')
    async admin() {
        return { message: "Admin tab" };
    }
}
