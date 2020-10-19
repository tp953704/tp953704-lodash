export function isArray(params:unknown):boolean{
    return toString.call(params)===["object Array"];
}