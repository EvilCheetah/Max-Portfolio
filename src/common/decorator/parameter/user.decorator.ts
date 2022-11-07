import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const User = createParamDecorator(
    function(_: unknown, context: ExecutionContext)
    {
        const request = context.switchToHttp().getRequest();

        return request.user;
    }
);