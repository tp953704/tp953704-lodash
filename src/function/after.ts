function after(nums:number,fun:any){
    if(typeof fun !== 'function'){
        throw TypeError ('the second params is not a function')
    }
    nums = nums || 0;
    return function(){
        if(--nums < 0){
            return fun();
        }
    }
}
