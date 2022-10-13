
/**
 * very very simple hasher
 * @param {string} str String u want to hash
 * @param {int} length Length upto 512 (default value)
 * @returns `string` hash
 */
const hash = (str,length=32) => {
    if(!str) return;
    
    //this is the min Length of the generated Hash below
    //should be a static variable to make generating more unique.
    const minLength = 512;
    if(length>minLength) length = minLength;

    const index = str.split("").map(e=>e.charCodeAt()).reduce((a,b)=>a+=2*b);
    return index.toString().padEnd(minLength,"0").split("").map((e,i)=>((e+i)*(str.charCodeAt(i%str.length)*(i+1)))
    .toString(16)).join("").substr((index%(hash.length-length))/(length/10)>>0,length);
}

module.exports = hash;