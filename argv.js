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
        return (...arguments) => arguments?.map(arg => (!this.contains(arg) || !/\-\w+/g.test(arg))||((arg=args[args.indexOf(arg)+1])&&(!arg||!!/(\-?)\w+/g.exec(arg)?.[1]))?void 0:arg);
    }
}

module.exports = argv;