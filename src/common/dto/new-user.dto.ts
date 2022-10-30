import { IsEmail, IsString } from "class-validator";

import { IsEqual } from "@decorator";
import { IsUsername } from "@decorator";


export class NewUserDTO
{
    @IsEmail()
    email:            string;

    @IsUsername()
    username:         string;

    @IsString()
    password:         string;

    @IsString()
    @IsEqual('password', { message: "'confirm_password' should match 'password'" })
    confirm_password: string;
}
