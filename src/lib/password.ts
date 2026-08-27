export interface PasswordOptions {
  length: number;
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const CHARSETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

export function generatePassword(options: PasswordOptions): string {
  const alphabet = (['lowercase', 'uppercase', 'numbers', 'symbols'] as const)
    .filter((key) => options[key])
    .map((key) => CHARSETS[key])
    .join('');
  if (!alphabet) throw new Error('At least one character set must be enabled');

  const bytes = crypto.getRandomValues(new Uint32Array(options.length));
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('');
}
