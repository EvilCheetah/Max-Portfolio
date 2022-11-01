import { IsEmail, IsString, Max } from "class-validator";

import { IsEqualTo } from "@decorator";
import { IsUsername } from "@decorator";
import { MAX_ALLOWED_PASSWORD_LENGTH, MAX_ALLOWED_USERNAME_LENGTH } from "@constant";


export class NewUserDTO
{
    @IsEmail()
    email:            string;

    @IsUsername()
    @Max( MAX_ALLOWED_USERNAME_LENGTH )
    username:         string;

    @IsString()
    @Max( MAX_ALLOWED_PASSWORD_LENGTH )
    password:         string;

    @IsString()
    @Max( MAX_ALLOWED_PASSWORD_LENGTH )
    @IsEqualTo('password', { message: "'confirm_password' should match 'password'" })
    confirm_password: string;
}
