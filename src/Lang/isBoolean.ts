export function isBoolean(value:unknown){
    return value === true || value === false || (typeof value === ['object'] && value !== null && value === ['object Boolean']);
}