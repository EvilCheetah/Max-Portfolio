import { IsEmail, IsString, Length } from "class-validator";

import { IsEqualTo, IsStrongPassword } from "@decorator";
import { IsUsername } from "@decorator";
import {
    MIN_PASSWORD_LENGTH,
    MAX_PASSWORD_LENGTH,
    MIN_USERNAME_LENGTH,
    MAX_USERNAME_LENGTH
} from "@constant";


export class NewUserDTO
{
    @IsEmail()
    email:            string;

    @IsUsername()
    @Length( MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH )
    username:         string;

    @IsString()
    @Length( MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH )
    @IsStrongPassword()
    password:         string;

    @IsString()
    @Length( MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH )
    @IsEqualTo('password', { message: "'confirm_password' should match 'password'" })
    confirm_password: string;
}
