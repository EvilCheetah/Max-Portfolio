import { IsString, MaxLength } from "class-validator";

import { IsEqualTo } from "@decorator";
import { MAX_ALLOWED_PASSWORD_LENGTH, MAX_ALLOWED_USERNAME_LENGTH } from "@constant";


export class UpdatePasswordDTO
{
    @IsString()
    @MaxLength( MAX_ALLOWED_USERNAME_LENGTH )
    old_password: string;

    @IsString()
    @MaxLength( MAX_ALLOWED_PASSWORD_LENGTH )
    new_password: string;

    @IsString()
    @MaxLength( MAX_ALLOWED_PASSWORD_LENGTH )
    @IsEqualTo('new_password', { message: "'new_password_confirm' should match 'password'" })
    new_password_confirm: string;
}