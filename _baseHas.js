"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:20
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:43
* @CopyRight			飞道科技
*/
const _getPrototype_1 = require("./_getPrototype");
/** Used for built-in method references. */
const objectProto = Object.prototype;
/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
    // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
    // that are composed entirely of index properties, return `false` for
    // `hasOwnProperty` checks of them.
    return object != null &&
        (hasOwnProperty.call(object, key) ||
            (typeof object == 'object' && key in object && _getPrototype_1.default(object) === null));
}
exports.default = baseHas;
