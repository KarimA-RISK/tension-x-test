import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../authorization/role.enum";
import { hash, compare } from 'bcryptjs';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    public password: string;

    @Column({
        type: "enum",
        enum: Role
    })
    roles: Role[] | string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        this.password = await hash(this.password, parseInt(process.env.BCRYPT_HASH_ROUND));
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await compare(attempt, this.password);
    }
}