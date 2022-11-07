import { IsEmail, IsString, Length } from "class-validator";

import { IsUsername } from "@decorator";
import {
    MIN_USERNAME_LENGTH,
    MAX_USERNAME_LENGTH,
    MIN_PASSWORD_LENGTH,
    MAX_PASSWORD_LENGTH
} from "@constant";


export class UpdateUserCredentialsDTO
{
    @IsEmail()
    email:    string;

    @IsUsername()
    @Length( MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH )
    username: string;

    @IsString()
    @Length( MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH )
    password: string;
}