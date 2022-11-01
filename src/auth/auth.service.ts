import { Injectable } from '@nestjs/common';

import { NewUserDTO } from '@dto';
import { CredentialsDTO } from './dto/credentials.dto';


@Injectable()
export class AuthService
{
    signup(information: NewUserDTO)
    {
        return 'This action signs user up';
    }

    login(credentials: CredentialsDTO)
    {
        return 'This action logs user in';
    }

    logout()
    {
        return 'This action logs user out';
    }

    refresh()
    {
        return 'This action refreshes user\'s token';
    }
}
