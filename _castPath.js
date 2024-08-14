"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-04-05 18:22:06
* @CopyRight			飞道科技
*/
const isArray_1 = require("./isArray");
const _stringToPath_1 = require("./_stringToPath");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
    return isArray_1.default(value) ? value : _stringToPath_1.default(value);
}
exports.default = castPath;
