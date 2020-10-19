import {castArray} from "../../src/Lang/castArray";

describe('Lang Methods',function () {
    
    test('castArray 包進陣列', () => {
        expect(castArray(1)).toEqual([1]);
        expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
        expect(castArray('abc')).toEqual( ['abc']);
        expect(castArray(null)).toEqual([null]);
        expect(castArray(undefined)).toEqual([undefined]);
        expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
    });
    // test('clone 淺複製',()=>{
    //     var objects = [{ 'a': 1 }, { 'b': 2 }];
    //     var shallow = clone(objects);
    //     expect(objects[0])
    // })
   
})