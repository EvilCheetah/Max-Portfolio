import { IsString } from "class-validator";

import { IsUsername } from "@decorator";


export class CredentialsDTO
{
    @IsUsername()
    username: string;

    @IsString()
    password: string;
}