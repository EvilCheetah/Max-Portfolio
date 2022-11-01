import { IsEmail, IsString, MaxLength } from "class-validator";

import { IsUsername } from "@decorator";
import { MAX_ALLOWED_PASSWORD_LENGTH, MAX_ALLOWED_USERNAME_LENGTH } from "@constant";


export class UpdateUserCredentialsDTO
{
    @IsEmail()
    email:    string;

    @IsUsername()
    @MaxLength( MAX_ALLOWED_USERNAME_LENGTH )
    username: string;

    @IsString()
    @MaxLength( MAX_ALLOWED_PASSWORD_LENGTH )
    password: string;
}