undefined + true; // NaN                 NaN + 1 = NaN
undefined + false; //NaN                  NaN + 0 = NaN
undefined + 5; // NaN                     NaN + 5 = NaN
undefined + NaN; // NaN                   NaN + NaN = NaN
undefined + "hello"; // "undefinedhello"  undefined + "string" = "undefinedstring"
//undefined + a + b + c + d + e + f; // ref error

console.log(undefined + "hello");
