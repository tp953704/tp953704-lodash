exports.modules = {
    a:1,
    b:{
        c:2
    }
}
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module;
const moduleExports = freeModule && freeModule.exports === freeExports;
const freeProcess = moduleExports && freeGlobal.process
console.log(module.nodeType)