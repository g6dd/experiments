
//very very simple hasher
const hash = (str,length=32) => {
    //this is the min Length of the generated Hash below
    //should be a static variable to make generating more unique.
    const minLength = 512;

    if(length<32)length=32;
    else if(length>minLength) length = minLength;

    if(!str) return;

    const index = str.split("").map(e=>e.charCodeAt()).reduce((a,b)=>a+=2*b);
    let hash = index.toString().padEnd(minLength,"0").split("").map((e,i)=>((e+i)*(str.charCodeAt(i%str.length)*(i+1))).toString(16)).join("");
    return hash.substr((index%(hash.length-length))/(length/10)>>0,length);
}

module.exports = hash;