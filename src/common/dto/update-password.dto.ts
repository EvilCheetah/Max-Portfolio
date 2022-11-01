import { IsString } from "class-validator";
import { IsEqual } from "@decorator/is-equal-to.decorator";


export class UpdatePasswordDTO
{
    @IsString()
    old_password: string;

    @IsString()
    new_password: string;

    @IsString()
    @IsEqual('new_password')
    new_password_confirm: string;
}