 /// Matches:
/// 1) Start with Letter
/// 2) Then allowed characters: A-Z, a-z, 0-9 and '_'

export const USERNAME = /^[a-zA-Z][a-zA-Z\d_]+$/