import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }

    handleRequest(err, user, info, context) {
        const request = context.switchToHttp().getRequest();
        if (user) return user;
        throw new UnauthorizedException();
    }
}