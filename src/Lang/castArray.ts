export const castArray = (params:unknown)=>{
    // Array.isArray()
    if(Object.prototype.toString.call(params) === '[object Array]'){
        return params;
    }
    return [params];
}