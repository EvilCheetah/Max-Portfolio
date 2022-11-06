import { AccessToken } from "./access-token.interface";
import { RefreshToken } from "./refresh-token.interface";


export interface JwtTokens extends AccessToken, RefreshToken {}