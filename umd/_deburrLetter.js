(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
    * @Author:				taoqf
    * @Date:				2016-06-15 11:59:02
    * @Last Modified by:	taoqf
    * @Last Modified time:	2016-06-17 15:54:23
    * @CopyRight			飞道科技
    */
    /** Used to map latin-1 supplementary letters to basic latin letters. */
    var deburredLetters = {
        '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
        '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
        '\xc7': 'C', '\xe7': 'c',
        '\xd0': 'D', '\xf0': 'd',
        '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
        '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
        '\xcC': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
        '\xeC': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
        '\xd1': 'N', '\xf1': 'n',
        '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
        '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
        '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
        '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
        '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
        '\xc6': 'Ae', '\xe6': 'ae',
        '\xde': 'Th', '\xfe': 'th',
        '\xdf': 'ss'
    };
    /**
     * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */
    function deburrLetter(letter) {
        return deburredLetters[letter];
    }
    exports.default = deburrLetter;
});
