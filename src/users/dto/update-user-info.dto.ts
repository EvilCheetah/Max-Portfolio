import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsUsername } from "src/common/decorator/is-username.decorator";


export class UpdateUserInfoDTO
{
    @IsEmail()
    email:    string;

    @IsUsername()
    username: string;

    @IsString()
    @MaxLength(120)
    password: string;
}