function getTag(value:unknown){
    if(value == null){
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(value);
}


export {getTag};


  