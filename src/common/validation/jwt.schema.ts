import * as Joi from "joi";


export const JwtSchema = {
    JWT_ACCESS_TOKEN_SECRET:      Joi.string().required(),
    JWT_ACCESS_TOKEN_EXPIRES_IN:  Joi.string().required(),

    JWT_REFRESH_TOKEN_SECRET:     Joi.string().required(),
    JWT_REFRESH_TOKEN_EXPIRES_IN: Joi.string().required()
}