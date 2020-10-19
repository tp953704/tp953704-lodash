import {getTag} from './typeCheck';
function isSymbol(value :unknown ) {
    const type = typeof value
    return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
  }
  
  export default isSymbol
  