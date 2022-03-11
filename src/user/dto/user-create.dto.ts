import {IsEmail, IsIn, IsString, Matches, MaxLength, MinLength} from "class-validator";
import {Match} from "../match.decorator";

export class UserCreateDto {
    @IsString()
    @IsIn(["Guest", "User", "Supervisor", "Admin"])
    roles: string;

    @IsEmail()
    email: string;

    @MinLength(9)
    @MaxLength(15)
    @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/, {
        message: "Both numeric and alphabetic symbols required"
    })
    password: string;

    @Match('password')
    passwordConfirmation: string;
}