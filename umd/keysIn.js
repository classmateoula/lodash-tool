(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./_indexKeys", "./_isIndex", "./_isPrototype", "./_iteratorToArray"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    * @Author:				taoqf
    * @Date:				2016-06-15 11:59:02
     * @Last Modified by: taoqf
     * @Last Modified time: 2017-10-17 13:50:45
    * @CopyRight			飞道科技
    */
    var _indexKeys_1 = require("./_indexKeys");
    var _isIndex_1 = require("./_isIndex");
    var _isPrototype_1 = require("./_isPrototype");
    var _iteratorToArray_1 = require("./_iteratorToArray");
    /** Used for built-in method references. */
    var objectProto = Object.prototype;
    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;
    /** Built-in value references. */
    var enumerate = Reflect ? Reflect.enumerate : undefined, propertyIsEnumerable = objectProto.propertyIsEnumerable;
    /**
     * The base implementation of `_.keysIn` which doesn't skip the constructor
     * property of prototypes or treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    var baseKeysIn;
    // Fallback for IE < 9 with es6-shim.
    if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
        baseKeysIn = function (object) {
            return _iteratorToArray_1.default(enumerate(object));
        };
    }
    else {
        baseKeysIn = function (object) {
            object = object == null ? object : Object(object);
            var result = [];
            for (var key in object) {
                result.push(key);
            }
            return result;
        };
    }
    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
        var index = -1;
        var isProto = _isPrototype_1.default(object), props = baseKeysIn(object), propsLength = props.length, indexes = _indexKeys_1.default(object), skipIndexes = !!indexes, result = indexes || [], length = result.length;
        while (++index < propsLength) {
            var key = props[index];
            if (!(skipIndexes && (key == 'length' || _isIndex_1.default(key, length))) &&
                !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                result.push(key);
            }
        }
        return result;
    }
    exports.default = keysIn;
});
