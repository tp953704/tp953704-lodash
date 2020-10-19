import {isObjectLike} from "./isObjectLike";
import {getTag} from './typeCheck';
export const isRegExp = (value:unknown) => isObjectLike(value) && getTag(value) == '[object RegExp]';