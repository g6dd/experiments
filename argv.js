const args = process.argv.slice(2);

const argv = {
    /**
     * returns if an argument exists
     * @param {string} argument 
     * @param {boolean} ignoreCasing 
     * @returns `boolean`
     */
    contains: (argument,ignoreCasing=false) => ignoreCasing ? args.map(e => e?.toLowerCase()).includes(argument?.toLowerCase()) : args.includes(argument),
    /**
     * get a List of Values from given Arguments
     * @param {array} arguments String Array
     * @returns `Array`
     */
    get get() {
        return (...arr) => arr.map(arg => (res=>!res||!!/(?:(\-+?)\w+)+/g.exec(res)?.[1]?/(?:=([\s\S]+))/g.exec(arg)?.[1]??void 0:res)((!this.contains(arg.replace(/(=[\s\S]+)/g,""))||!/(?:(\-+)\w+)+/g.test(arg))?void 0:args[args.indexOf(/((?:(\-+)\w+)+)/g.exec(arg)[0])+1]))
    }
}

module.exports = argv;