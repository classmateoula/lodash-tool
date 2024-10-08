/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:30
* @CopyRight			飞道科技
*/
/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
export default function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    if (value === INFINITY || value === -INFINITY) {
        const sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
