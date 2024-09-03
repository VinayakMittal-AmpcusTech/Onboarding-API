import { createHmac } from 'crypto';

export function getHash(pass: string): string {
  const algo = 'sha256';
  const secret = 'braven_tool_secret_key';
  const hmac = createHmac(algo, secret);
  const password = hmac.update(pass).digest('hex');
  return password;
}

export function validateHash(pass: string, userPassword: string): boolean {
  const currentHash = getHash(pass);
  //73ef1e5c3e1beb28a8a39f43f0b3441d52308c41caf1d619adcda6284d1e5475
  const currentHashWithoutEmail = getHash(pass);
  if (userPassword == currentHash || userPassword == currentHashWithoutEmail) {
    return true;
  } else {
    return false;
  }
}

export function generatePassword(charLength: number) {
  let pass = '';
  const str =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ!' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

  for (let i = 1; i <= charLength; i++) {
    const word = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(word);
  }
  return pass;
}
