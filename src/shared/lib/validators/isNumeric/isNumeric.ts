export function isNumeric(value?: string) {
  if (!value) return false;
  return /^$|^(0|[1-9]\d*)$/.test(value);
}
