import {isObjectLike} from './isObjectLike';
import {getTag} from './typeCheck';
export function isArguments(value:unknown):boolean {
    return isObjectLike(value) && getTag(value) == '[object Arguments]'
}
  
