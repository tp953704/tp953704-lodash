import {isObjectLike} from "./isObjectLike";
import {getTag} from './typeCheck';
export function isDate(value:unknown){
    return  isObjectLike(value) && getTag(value) == '[object Date]';
}