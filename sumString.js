/**
 * Some Additions to String
 * 
 * maybe try to remake some functions also, but who knows.
 */
const string = {};

/**
 * Reverses a String
 * @param {string} str String
 */
string.strrev = (str) => str.split("").reverse().join("");
/**
 * Creates a Range of Characters
 * @param {string} regex Regular Expression
 */
string.range = (regex) => Array.from({length:65592}, (e,i) => String.fromCharCode('A'.charCodeAt()+i-32)).filter(e =>!!new RegExp(`${regex}`).exec(e)).join("");
/**
 * Returns if the String equals to another string. 
 * 
 * This is `case sensitive`
 * @param {string} str String
 * @param {string} equals Equals to
 */
string.equals = (str,equals) => str==equals;
/**
 * Returns if the String equals to another string. 
 * 
 * This ignores `casing`
 * @param {string} str String
 * @param {string} equals Equals to
 */
string.equalsIgnoreCase = (str,equals) => string.equals(str?.toLowerCase(),equals?.toLowerCase());
/**
 * Converts to camel case
 * @param {string} str String
 */
string.toCamelCase = (str) => str.replace(/(\w)(\w+)(?:\s|\S)?/g,(t,C,c)=>C.toUpperCase()+c.toLowerCase());
/**
 * Converts to snake case
 * @param {string} str String
 */
string.toSnakeCase = (str) => str.split(/\W+/g).map(e=>e.toLowerCase()).join("_");
/**
 * Converts to kebab case
 * @param {string} str String
*/
string.toKebabCase = (str) => str.split(/\W+/g).map(e=>e.toLowerCase()).join("-");

module.exports = string;