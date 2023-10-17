function analyzePassword(password: string, config: any) {
  const characterTypes: Set<string> = new Set();
  console.log(config);

  for (const char of password) {
    if (/[a-z]/.test(char)) {
      characterTypes.add('小写字母');
    } else if (/[A-Z]/.test(char)) {
      characterTypes.add('大写字母');
    } else if (/[0-9]/.test(char)) {
      characterTypes.add('数字');
    } else if (/[^a-zA-Z0-9]/.test(char)) {
      characterTypes.add('特殊字符');
    }
  }

  const res = findMatchingConfig({
    characterTypes: characterTypes.size,
    length: password.length
  }, config)
  console.log(res);
  return res
}

function findMatchingConfig(analysis: { characterTypes: number, length: number }, config: any[]): any | null {
  for (const item of config) {
    if (analysis.characterTypes < item.minDiversity || analysis.length < item.minLength) {
      return item;
    }
  }

  return null;
}

export {
  analyzePassword
}