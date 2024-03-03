export const generateBraces = (n: number): string[] => {
  const result: string[] = [];

  const backtrack = (s: string = '', left: number = 0, right: number = 0): void => {
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }
    if (left < n) {
      backtrack(s + '(', left + 1, right);
    }
    if (right < left) {
      backtrack(s + ')', left, right + 1);
    }
  };

  backtrack();
  return result;
};
