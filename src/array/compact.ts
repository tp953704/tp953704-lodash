export function compact(array:Array<unknown>){
    let resultArray:Array<unknown> = [];
    array.forEach((item:unknown)=>{
        if(item){
            resultArray.push(item);
        }
    })
    return resultArray;
}