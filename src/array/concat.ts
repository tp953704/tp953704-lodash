export const concat = (array:Array<unknown>,...params:Array<unknown>)=>{
    const paramArray = [...params];
    let resIndex = array.length;
    for(const value of paramArray){
        array[resIndex++] = value;
    }
    return array;
}