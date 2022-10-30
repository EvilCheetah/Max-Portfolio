import { buildMessage, matches, ValidateBy, ValidationArguments, ValidationOptions } from "class-validator";

import { USERNAME } from "@constant/pattern/username.constant";


export function isUsername(value: string): boolean
{
    /// Matches:
    /// 1) Start with Letter
    /// 2) Then allowed characters: A-Z, a-z, 0-9 and '_'
    return matches(value, USERNAME);
}


export function IsUsername(validation_options?: ValidationOptions)
{
    return ValidateBy({
        name: 'isUsername',
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