// input: none
// output: object

//algo:
//

const createLogger = () => {
    const records = [];
    return {
        warn(message) {
            // input: string
            // output: undefined
            records.push({
                message,
                dateTime: new Date(),
                type: 'warn'
            });
        },
        // input: string
        // output: undefined
        error(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'error'
            });
        },
        // input: string
        // output: undefined
        log(message) {
            records.push({
                message,
                dateTime: new Date(),
                type: 'log'
            });
        },
        //input:STRING
        //output: ARRAY 

        // algo
        //1. check if input -> filter
        //2. return all records
        //3. sort
        getRecords(str) {
            return (str ? records
                .filter(({type}) => type === str) : records)
                .sort((a, b) => a.dateTime - b.dateTime);
        }
    };
};

const logger = createLogger();
console.log(logger);
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
