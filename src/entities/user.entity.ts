import {Column, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../authorization/role.enum";

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        type: "enum",
        enum: Role
    })
    roles: Role[];
}