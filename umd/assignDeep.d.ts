/**
 * Copies the values of all enumerable own properties of one or more source objects to the target object,
 * recursively copying all nested objects and arrays as well.
 *
 * @param target The target object to receive values from source objects
 * @param sources Any number of objects whose enumerable own properties will be copied to the target object
 * @return The modified target object
 */
export declare function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}, Z extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y, source6: Z): T & U & V & W & X & Y & Z;
export declare function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y): T & U & V & W & X & Y;
export declare function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(target: T, source1: U, source2: V, source3: W, source4: X): T & U & V & W & X;
export declare function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
export declare function deepAssign<T extends {}, U extends {}, V extends {}>(target: T, source1: U, source2: V): T & U & V;
export declare function deepAssign<T extends {}, U extends {}>(target: T, source: U): T & U;
export default deepAssign;
