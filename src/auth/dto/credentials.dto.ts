import { IsString, Length } from "class-validator";

import { IsUsername } from "@decorator";
import { 
    MAX_PASSWORD_LENGTH,
    MAX_USERNAME_LENGTH,
    MIN_PASSWORD_LENGTH,
    MIN_USERNAME_LENGTH
} from "@constant";


export class CredentialsDTO
{
    @IsUsername()
    username: string;

    @IsString()
    password: string;
}