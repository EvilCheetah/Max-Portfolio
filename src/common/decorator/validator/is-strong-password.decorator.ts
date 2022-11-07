import { buildMessage, isString, matches, ValidateBy, ValidationArguments, ValidationOptions } from "class-validator";

import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, STRONG_PASSWORD } from "@constant";


export function isStrongPassword(value: unknown): boolean
{
    return isString(value) && 
            matches(value, STRONG_PASSWORD);
}


export function IsStrongPassword(validation_options?: ValidationOptions)
{
    return ValidateBy({
        name: 'IsStrongPassword',
        validator: {
            validate: (value: any, args: ValidationArguments): boolean => isStrongPassword(value),
            defaultMessage: buildMessage(
                each_prefix => (
                    each_prefix + '$property must be a strong password. Must follow the following criteria: ' +
                    `must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters long, `     +
                    'must have at least 1 uppercase letter, '                                                 + 
                    'must have at least 1 lowercase letter, '                                                 +
                    'must have at least 1 digit, '                                                            + 
                    'one of the following special characters - @$!%*?&'
                ),
                validation_options
            )
        }
    })
}