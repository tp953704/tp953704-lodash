export function chunk(array:Array<unknown>,size:number=1){
    const length = array.length || 0;
    const chunkNum = Math.ceil(length/size);
    let resuiltArray:Array<unknown>=[];
    for(let i = 0;i<chunkNum;i++){
        let subArray:Array<unknown> = array.slice(i*size,(i+1)*size);
        resuiltArray.push(subArray)
    }
    return resuiltArray;
}