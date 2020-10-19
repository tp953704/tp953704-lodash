import {getTag} from './typeCheck';
function isString(value :unknown) {
    const type = typeof value
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]')
  }
  
  export default isString