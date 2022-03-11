import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../entities/user.entity";
import {Repository} from "typeorm";
import {UserCreateDto} from "./dto/user-create.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userEntityRepository: Repository<UserEntity>) {
    }

    public async createUser(userCreateDto: UserCreateDto) {
        const user: UserEntity = await this.userEntityRepository.findOne({ where: { email: userCreateDto.email } });
        if(user) throw new HttpException(user.email + ' already exists', HttpStatus.CONFLICT);
        delete userCreateDto.passwordConfirmation;
        const userEntity: UserEntity = Object.assign(new UserEntity(), userCreateDto);
        const newUser: UserEntity = await this.userEntityRepository.save(userEntity);
        delete newUser.password;
        return {
            response: newUser,
            statusCode: HttpStatus.CREATED
        }
    }
}
