(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Class = {}));
}(this, (function (exports) { 'use strict';

    var A = function A() {
      return '1';
    };

    exports.A = A;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
