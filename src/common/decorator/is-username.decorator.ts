import { buildMessage, matches, ValidateBy, ValidationArguments, ValidationOptions } from "class-validator";


export function isUsername(value: string): boolean
{
    /// Matches:
    /// 1) Start with Letter
    /// 2) Then allowed characters: A-Z, a-z, 0-9 and '_'
    return matches(value, /^[a-zA-Z][a-zA-Z\d_]+$/g);
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