# _Type Coercion for Reference Types_

## _Materials_

- [Object to primitive conversion
  ](https://javascript.info/object-toprimitive)

- [Type Coercion](https://replit.com/@vrezhhovanisyan/3lessontype-coercion#index.js)

## _Tasks_

- ### [Examples from GitHub](https://github.com/vre2h/test-force/tree/master/gtu-02)
  Try out all examples, play with different types and understand.

1. ## Binary + operator
   Numeric conversion rules
   | Value | Becomes |
   | -------------|:----------:|
   | undefined | NaN |
   | null | 0 |  
   | NaN | NaN |
   | true | 1 |
   | false | 0 |

- Type coercion for null
  [Numeric Conversion](https://github.com/ElenGhazaryann/Type-Coercion-for-References/blob/main/t1.GTU02.null.js)

```JS
null + undefined
null + true
null + false
null + 3
null + NaN
null + 'hello'
null + a + b + c + d + e + f
```

- Type coercion for undefined [Undefined](https://javascript.info/type-conversions#summary)

```js
undefined + true;
undefined + false;
undefined + 5;
undefined + NaN;
undefined + "hello";
undefined + a + b + c + d + e + f;
```

- Type coercion for Boolean [Boolean Conversion](https://javascript.info/type-conversions#boolean-conversion)

```js
true + false;
true + 2;
true + NaN;
true + "hello";
true + a + b + c + d + e + f;
false + 4;
false + NaN;
false + "hello";
false + a + b + c + d + e + f;
```

- [String coercion](https://javascript.info/type-conversions#string-conversion)

```js
5 + 3;
5 + NaN;
5 + "hello";
5 + a + b + c + d + e + f;
"hello" + NaN;
"hello" + a + b + c + d + e + f;
```

- Try the same also for binary -, \*, /, %, |, &, ^, <<, >>, >>>, ==, ===, <, >, >=, <= operators as you did for binary + operator

---

2. ## Unary - operator
   ### Continue to check different types,

```js
-null -
  undefined -
  true -
  false -
  5 -
  "hello" -
  "234" -
  "234.32e3" -
  new Number(NaN) -
  new String("hello") -
  /google.com/ -
  [] -
  [2] -
  [2, 3] -
  function () {};
```
