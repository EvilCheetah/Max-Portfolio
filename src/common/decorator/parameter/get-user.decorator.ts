import { JwtPayload, RefreshToken } from "@interface";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const GetUser = createParamDecorator(
    function(
        data:    keyof (JwtPayload & RefreshToken),
        context: ExecutionContext
    )
    {
        const request = context.switchToHttp().getRequest(),
              user    = request.user;
        
        if ( !( data && (data in user) ) )
            return user;
        
        return user[data];
    }
);