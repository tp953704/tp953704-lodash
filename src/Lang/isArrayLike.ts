const MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value:unknown) {
    return typeof value === 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
  }
export function isArrayLike(value:unknown){
    return typeof value !== 'function' && value !== null && isLength(value.length);
}