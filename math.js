"use strict";
// // External module Export
// export function add(a:number,b:number):number {
//     return a+b;
// }
// export function multiply(a:number,b:number):number {
//     return a*b;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.myspace = void 0;
// namespace export
var myspace;
(function (myspace) {
    function add(a, b) {
        return a + b;
    }
    myspace.add = add;
})(myspace || (exports.myspace = myspace = {}));
