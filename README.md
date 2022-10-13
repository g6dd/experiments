![Visitor](https://visitor-badge.laobi.icu/badge?page_id=g6dd.experiments)
# Experiments
Small NodeJS Projects/Snippets

Basically everything could end up here.

Tell me when and where im wrong or could do better to improve

# Current Projects
```javascript
// argv
// node myCoolProject -v value
const argv = require("./argv");

argv.contains("-v")                   // returns true
argv.get("-v")                        // returns ["value"]

// hash
const hash = require("./hash");

hash("a simple hasher")               // fc8b231ae203078302ddbaceb2c03052
hash("a simple hasher",56)            // 793a589c014472c12dc5c13f11e14dde0147cc013813064a4014cdf0

//math
const math = require("./sumMath");

math.abs(-2)                          // 2
math.acos(-1)                         // 3.141592653589793
math.avg(0,1,2,3,4)                   // 2
math.ceil(Math.PI)                    // 4
math.coll(128)                        // [128, 64, 32, 16, 8, 4, 2, 1]
math.exec("(12*(24+2))/(24/(12+2))")  // 182
math.exp(1)                           // 2.7182818284590455
math.floor(Math.PI)                   // 3
math.frct(6)                          // 720
math.max(0,1,2,-3)                    // 2
math.med(0,1,2,3,4)                   // 2
math.min(0,1,2,-3)                    // -3
math.pow(2,3)                         // 8
math.round(Math.PI,3)                 // 3.142
math.rt(8,4)                          // 1.6817928305074292
math.sqrt(8)                          // 3
math.trunc(Math.PI)                   // 3
```
