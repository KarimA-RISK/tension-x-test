import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../entities/user.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthenticationService {
    constructor(@InjectRepository(UserEntity) private readonly userEntityRepository: Repository<UserEntity>,
                private jwtService: JwtService,
    ) {}

    async login(email: string, password: string): Promise<any> {
        const user: UserEntity = await this.userEntityRepository.findOneOrFail({where: {email: email}})
            .catch(() => {throw new HttpException(email + ' user not found', HttpStatus.NOT_FOUND)});
        const attempt: boolean = await user.comparePassword(password)
        if (attempt) {
            const payload = { email: user.email, sub: user.id, roles: user.roles };
            delete user.password;
            return {
                response: {
                    token: await this.jwtService.sign(payload, {
                        expiresIn: parseInt(process.env.TOKEN_EXPIRE_TIME),
                        secret: process.env.TOKEN_SECRET
                    }),
                    user
                },
                statusCode: HttpStatus.OK
            }
        } else throw new HttpException('Password Incorrect', HttpStatus.UNAUTHORIZED);
    }
}
