import * as wasm from './hello_world_bg.wasm';

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    var ret = wasm.add(a, b);
    return ret >>> 0;
}

