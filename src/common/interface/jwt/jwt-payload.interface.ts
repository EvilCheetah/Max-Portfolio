import { ID } from "@types";


export interface JwtPayload
{
    sub?:      ID;
    
    email?:    string;
}