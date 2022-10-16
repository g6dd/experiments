![Visitor](https://visitor-badge.laobi.icu/badge?page_id=g6dd.experiments)
# Experiments
Small NodeJS Projects/Snippets

Basically everything could end up here.

Tell me when and where im wrong or could do better to improve

# Current Projects
```javascript
// argv
// node myCoolProject -v value -d -hasDefault
const argv = require("./argv");

argv.contains("-v")                             // returns true
argv.get("-v")                                  // returns ["value"]
argv.get("-v=fallback")                         // returns ["value"] because -v is set
argv.get("-d")                                  // returns [undefined]
argv.get("-d=fallback")                         // returns ["fallback"]

// hash
const hash = require("./hash");

hash("a simple hasher")                         // fc8b231ae203078302ddbaceb2c03052
hash("a simple hasher",56)                      // 793a589c014472c12dc5c13f11e14dde0147cc013813064a4014cdf0

//math
const math = require("./sumMath");

math.abs(-2)                                    // 2
math.acos(-1)                                   // 3.141592653589793
math.avg(0,1,2,3,4)                             // 2
math.cbrt(34)                                   // 3.239611801277483
math.ceil(Math.PI)                              // 4
math.clz32(12345)                               // 18
math.coll(128)                                  // [128, 64, 32, 16, 8, 4, 2, 1]
math.exec("(((3*((3*(6/2)+1)/2)+1)/2)/2/2/2)")  // 1
math.exp(1)                                     // 2.7182818284590455
math.expm1(1)                                   // 1.7182818284590455
math.floor(Math.PI)                             // 3
math.frct(6)                                    // 720
math.hypot(1,2,3,4)                             // 5.477225575051661
math.max(0,1,2,-3)                              // 2
math.med(0,1,2,3,4)                             // 2
math.min(0,1,2,-3)                              // -3
math.pow(2,3)                                   // 8
math.round(Math.PI,3)                           // 3.142
math.rt(8,4)                                    // 1.6817928305074292
math.sign(-15.6)                                // -1
math.sqrt(8)                                    // 3
math.trunc(Math.PI)                             // 3

math.E                                          // 2.7182818284590455
math.SQRT1_2                                    // 0.7071067811865476
math.SQRT2                                      // 1.4142135623730951

//string
const string = require("./sumString");

string.strrev("Example String");                // 'gnirtS elpmaxE'
string.range("[a-g0-9]");                       // '0123456789abcdefg'
string.equals("abc","Abc");                     // false
string.equalsIgnoreCase("abc","Abc");           // true
string.toCamelCase("Example String");           // 'ExampleString'
string.toSnakeCase("Example String");           // 'example_string'
string.toKebabCase("Example String");           // 'example-string'
string.chunkSplit("Example String", 3);         // ['Exa', 'mpl', 'e S', 'tri', 'ng']
```