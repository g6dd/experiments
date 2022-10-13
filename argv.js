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
        return (...arguments) => arguments.map(argument => {
            if(!this.contains(argument) || !argument?.startsWith("-") || argument == "-") return;
            const value = args[args.indexOf(argument)+1];
            return (!value || value?.startsWith("-")) ? null : value;
        });
    }
}

module.exports = argv;