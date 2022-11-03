import { buildMessage, matches, ValidateBy, ValidationArguments, ValidationOptions } from "class-validator";

import { USERNAME } from "@constant";


export const IS_USERNAME = 'isUsername';


export function isUsername(value: string): boolean
{
    return matches(value, USERNAME);
}


export function IsUsername(validation_options?: ValidationOptions)
{
    return ValidateBy({
        name: IS_USERNAME,
        validator: {
            validate: (value: any, args: ValidationArguments) => isUsername(value),

            defaultMessage: buildMessage(
                (each_prefix) => (
                    each_prefix + "$property only have the following characters: A-Z, a-z, 0-9 and '_'"
                ),
                validation_options
            )
        }
    })
}