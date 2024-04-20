function isInputValid(string: string): boolean {
  if (!string.length || !string) {
    return false;
  }

  const trimmedOutput = string.trim();
  return trimmedOutput.length !== 0;
}

export default isInputValid;
