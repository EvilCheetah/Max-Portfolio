import * as Joi from "joi";


export const BcryptSchema = {
    SALT_ROUNDS: Joi.string().required()
}