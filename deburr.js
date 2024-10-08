"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 11:49:14
* @CopyRight			飞道科技
*/
const _deburrLetter_1 = require("./_deburrLetter");
const toString_1 = require("./toString");
/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
const reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
/** Used to compose unicode character classes. */
const rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23', rsComboSymbolsRange = '\\u20d0-\\u20f0';
/** Used to compose unicode capture groups. */
const rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';
/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
const reComboMark = RegExp(rsCombo, 'g');
/**
 * Deburrs `string` by converting
 * [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * to basic latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [str=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(str) {
    str = toString_1.default(str);
    return str && str.replace(reLatin1, _deburrLetter_1.default).replace(reComboMark, '');
}
exports.default = deburr;
