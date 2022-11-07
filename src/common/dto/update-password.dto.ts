import { IsString, Length } from "class-validator";

import { IsEqualTo } from "@decorator";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "@constant";


export class UpdatePasswordDTO
{
    @IsString()
    @Length( MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH )
    old_password: string;

    @IsString()
    @Length( MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH )
    new_password: string;

    @IsString()
    @Length( MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH )
    @IsEqualTo('new_password', { message: "'new_password_confirm' should match 'password'" })
    new_password_confirm: string;
}