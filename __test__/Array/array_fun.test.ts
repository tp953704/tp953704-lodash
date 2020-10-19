import {chunk} from "../../src/array/chunk";
import {compact} from "../../src/array/compact";
import {concat} from "../../src/array/concat";
describe('Array funs',function () {
    const aTestItem = ['1','2','3','4'];
    test('chunk', () => {
        expect(chunk(aTestItem,2)).toEqual([['1','2'],['3','4']]);
        expect(chunk(aTestItem,3)).toEqual([['1','2','3'],['4']]);
    });
    test('compact  falsy value remove', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
        expect(compact([undefined, 1, false, NaN, '', 3])).toEqual([1,3]);
    });
    test('concat Creates a new array concatenating array with any additional arrays and/or values.',()=>{
        const other = concat(aTestItem, 2, [3], [[4]]);

        expect(other).toEqual(['1','2','3','4',2, [3], [[4]]]);
    });

})