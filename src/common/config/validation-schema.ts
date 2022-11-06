import * as Joi from "joi";
import { BcryptSchema, JwtSchema } from "@validation";


export const validationSchema = Joi.object({
    ...BcryptSchema,
    ...JwtSchema
});