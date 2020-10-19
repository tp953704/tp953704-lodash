import {isObjectLike} from "./isObjectLike";
import {getTag} from './typeCheck';
function isWeakSet(value) {
    return isObjectLike(value) && getTag(value) == '[object WeakSet]'
  }
  
  export default isWeakSet