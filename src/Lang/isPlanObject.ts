import {isObjectLike} from "./isObjectLike";
import {getTag} from './typeCheck';

export function isPlanObject(value:unknown){
    if (!isObjectLike(value) || getTag(value) != '[object Object]') {
        return false
      }
      if (Object.getPrototypeOf(value) === null) {
        return true
      }
      let proto = value
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
      }
      return Object.getPrototypeOf(value) === proto
}