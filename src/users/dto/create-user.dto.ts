import { IsEmail, IsString } from "class-validator";
import { IsEqual } from "src/common/decorator/is-equal.decorator";
import { IsUsername } from "src/common/decorator/is-username.decorator";


export class CreateUserDTO
{
    @IsEmail()
    email:            string;

    @IsUsername()
    username:         string;

    @IsString()
    password:         string;

    @IsString()
    @IsEqual('password', { message: "'confirmation_password' should match 'password'" })
    confirm_password: string;
}
