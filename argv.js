//Array with all Arguments
//rn process arguments, but can be everything.
const args = process.argv.slice(2);

const argv = {
    // returns true if argument exists
    contains: (argument,ignoreCasing=false) => ignoreCasing ? args.map(e => e?.toLowerCase()).includes(argument?.toLowerCase()) : args.includes(argument),
    // get a List of Values from given Arguments
    get get() {
        return (...arguments) => arguments.map(argument => {
            if(!this.contains(argument) || !argument?.startsWith("-") || argument == "-") return;
            const value = args[args.indexOf(argument)+1];
            return (!value || value?.startsWith("-")) ? null : value;
        });
    }
}

module.exports = argv;