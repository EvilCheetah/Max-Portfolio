import { IsEmail, IsString, Max } from "class-validator";

import { IsEqualTo } from "@decorator";
import { IsUsername } from "@decorator";


export class NewUserDTO
{
    @IsEmail()
    email:            string;

    @IsUsername()
    @Max(120)
    username:         string;

    @IsString()
    @Max(120)
    password:         string;

    @IsString()
    @Max(120)
    @IsEqualTo('password', { message: "'confirm_password' should match 'password'" })
    confirm_password: string;
}
