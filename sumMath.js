/**
 * Simple Math remake
 * 
 * Missing Functions get added when i know how they work
 */
const math = {};

/**
 * Returns the absolute value of a number
 * @param  {number} n Number
 */
math.abs = (n) => Number(n>=0?n:-n);
/**
 * Returns the inverse cosine of a number
 * @param  {number} n Number
 */
math.acos = (n) => (isNaN(n)||n>=1||n<=-2)?(n==1?0:NaN):((n=2+(Number(n)*2)),Number(!!n?Math.PI/(n):Math.PI));
/**Z
 * Returns the average from an Array
 * @param  {...number} n Number
 */
math.avg = (...n) => !(n.length)?0:Number((n.map(Number).reduce((a,b)=>a+=b))/n.length);
/**
* Returns the cube root of a number
* @param  {number} n Base Number
*/
math.cbrt = (n) => math.rt(n,3);
/**
 * Returns the smallest integer greater than or equal to a given number
 * @param  {number} n Number
 */
math.ceil = (n) => Number(-math.floor(-n));
/**
 * Returns the number of leading zero bits in the 32-bit binary representation of a number
 * @param {number} n Number
 */
math.clz32 = (n) => (!(n>>>=0))?32:(Math.abs(n)).toString(2).padStart(32,"0").split("").map(e=>Math.sign(n)<0?+(!Number(e)):e).join("").split("1")[0].length;
/**
 * Returns an generated Array from `n` to 1 in the Collatz conjecture/problem
 * @param  {number} n Number
 */
math.coll = (n) => {
    if(typeof n !== "number" || n<1) return NaN;
    const arr = [], collatz = n => ((arr.push(n)),(n<=1)?n:collatz(!(n%2)?math.round(n/2,0):3*n+1));
    return collatz(n), arr;
}
/**
 * Returns {@link Math.E} raised to the power of a number
 * 
 * and
 * 
 * yes i know `Math.E**n` or `Math.pow(Math.E,n)`..
 * 
 * but that would be too easy..
 * @param  {number} n Number
 */
math.exp = (n) => Number((isNaN(n)||n==0)?NaN:(1+Array.from({length:100},(e,i)=>((n**i)/math.frct(i))).filter(e=>e!=Infinity).reduce((a,b)=>a+=b)));
/**
 * Returns e raised to the power of a number, subtracted by 1
 * @param {*} n 
 * @returns 
 */
math.expm1 = (n) => Number(math.exp(n)-1);
/**
 * Returns the largest integer less than or equal to a given number
 * @param  {number} n Number
 */
math.floor = (n) => Number(math.trunc(n)-(n<0?(/[\.]/g.test(n)?1:0):0));
/**
 * Returns the factorial product of all integers between 1 and the given number
 * @param  {number} n Number
 */
math.frct = (n) => Number((isNaN(n)||n<=1)?n:n*math.frct(n-1));
/**
 * Returns the square root of the sum of squares of its arguments
 * @param  {...number} n Number Array
 */
math.hypot = (...n) => math.sqrt(n.map(n=>n**2).reduce((a,b)=>a+=b));
/**
 * Returns the largest of the numbers in an Array
 * @param  {...number} n Number Array
 */
math.max = (...n) => Number(n.filter(e=>!isNaN(Number(e))).sort((a,b)=>a-b).reverse()[0]);
/**
 * Returns the median from an Array
 * @param  {...number} n Number
 */
math.med = (...n) => Number(((n=n.sort((a,b)=>a-b).map(Number).splice(n.length/2-(n.length%2==0?1:0),n.length%2==0?2:1)),(n.length%2==0?n.reduce((a,b)=>a+=b)/2:n[0])));
/**
 * Returns the smallest of the numbers in an Array
 * @param  {...number} n Number Array
 */
math.min = (...n) => Number(n.filter(e=>!isNaN(Number(e))).sort((a,b)=>a-b)[0]);
/**
 * Returns the value of a base raised to a power
 * @param  {number} n Base Number
 * @param  {number} exp Exponent
 */
math.pow = (n,exp=2) => Number(n)**Number(exp);
/**
 * Returns the value of a number rounded to the nearest integer
 * @param  {number} n Number
 * @param  {number} dec Number of shown decimals
 */
math.round = (n,dec=2) => Number(Number(n).toFixed(dec));
/**
 * Returns the root of a number
 * @param  {number} n Base Number
 * @param  {number} exp Exponent
 */
math.rt = (n,exp) => Number((isNaN(n) || !n)?NaN:math.pow(n,(1/exp)));
/**
 * eturns 1 or -1, indicating the sign of the number passed
 * @param {number} n Number
 */
math.sign = (n) => isNaN(n)?NaN:(n==math.abs(n)?1:-1);
/**
 * Returns the square root of a number
 * @param  {number} n Base Number
 */
math.sqrt = (n) => math.rt(n,2);
/**
 * Returns the integer part of a number by removing decimals
 * @param  {number} n Number
 */
math.trunc = (n) => Number(n.toString().split(".")[0]);
/**
 * Returns the result of the given equation
 * @param  {string} str simple equation (no spaces allowed)
 */
math.exec = (str) => {
    if(/[^\d*+-/.\(\)]/g.test(str) || !str) return;
    const   equation=/(-?(?:(?:\d+)?\.)?\d+)([\*\/\+\-])(-?(?:(?:\d+)?\.)?\d+)/g,symbols=/[\*\/\+\-]/g,
            brokenEquation=/(-?(?:(?:\d+)?\.)?\d+)([\*\/\+\-]{2,})(-?(?:(?:\d+)?\.)?\d+)/g, brokenNumber=/([\*\/\+]{1}\d+\.?(?!\d+))/g,
            brackets=/\(([\d*+-/.]+)\)/g,validNumber=/(-?(?:(?:\d+)?\.)?\d+)/g,
            
            checkForUseless = (str) =>{
                if(brokenEquation.test(str)) str = math.exec(str.replace(brokenEquation,(e,s)=>{
                    var _s=s.substr(0,2);
                    _s= (_s=="--") ? "+" : ((_s=="+-"||_s=="-+") ? "-" : (!s.endsWith("-") ? _s.substr(0,1) : _s));
                    return e.replace(s,_s);
                }));
                if(brackets.test(str)) str = str.replace(brackets,e => math.exec(e.substr(1,e.length-2)));
                return str;
            }, 
            returnResult = (str) => {
                str=checkForUseless(str);const _str=checkForUseless(str);
                if(_str.replace && (!_str.replace(equation,'')||_str.replace(equation,'')!=_str)&&str!=_str)return returnResult(math.exec(str));
                return !isNaN(_str)?Number(_str):math.exec(_str);
            }, 
            checkEquation = (n) =>(/[\*\/]/g.test(n)?5e3:3e3),
            
            numArr = str.split(validNumber).filter(e=>validNumber.test(e)).map(e => e),
            symArr = str.split(validNumber).filter(e=>!validNumber.test(e)).slice(1).map((e,i,a)=> (e==''||!!e&&e.startsWith("."))?(i+1==a.length||e.startsWith(".")?void 0:"-"):e).filter(Boolean),
            equations = symArr.map((e,i)=>[numArr[i],e=="-"?math.abs(numArr[i+1]):numArr[i+1]].join(e));
            equations.sort((a,b) =>(checkEquation(a)-checkEquation(b)-equations.indexOf(a))).reverse();

    const _=equation.exec(equations[0])?.slice(1).map((e,i)=>i==1?e:Number(e));
    if(!_) return returnResult(str);

    const doo={"*": (a,b) =>a*=b,"/": (a,b) =>a/=b,"+": (a,b) =>a+=b,"-": (a,b) =>a-=b,}[_[1]](_[0],_[2]);
    return returnResult(checkForUseless(str.replace(equations[0],(equations[0].startsWith("-")?doo.toString().startsWith("-")?"":"+":"")+doo)));
}
/**
 * Represents Euler's number
 */
math.E = math.exp(1);
/**
 * Represents the square root of 2
 */
math.SQRT2 = math.sqrt(2);
/**
 * Represents the square root of 1/2
 */
math.SQRT1_2 = math.sqrt(1/2);

module.exports = math;