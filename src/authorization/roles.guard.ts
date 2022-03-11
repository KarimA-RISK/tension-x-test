import {Injectable, CanActivate, ExecutionContext, Scope, Inject} from '@nestjs/common';
import {Reflector, REQUEST} from '@nestjs/core';
import {Role} from "./role.enum";
import {ROLES_KEY} from "./roles.decorator";
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector,
                @Inject(REQUEST) public readonly request: Request){}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const user = (this.request as any).user;
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}