import {isObjectLike} from "./isObjectLike";
function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
  }
  
  export default isElement