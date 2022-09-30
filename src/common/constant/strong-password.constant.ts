/// Description:
///     Regex for strong password
/// Password should:
/// - Be between 8 and 120 characters long
/// - Have at least one 'lowercase' character
/// - Have at least one 'uppercase' character
/// - Have at least one 'digit'
/// - Have at least one of the following special characters: 
///     -- "@"
///     -- "$"
///     -- "!"
///     -- "%"
///     -- "*"
///     -- "?"
///     -- "&"

export const STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,120}$/g