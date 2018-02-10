const actionFileName = './wks-import/TrainAction.js'
const inputFileName = './inputParams/hello.json'

MainFun = () => {
    let openWhiskFunction = require((process.argv[2] || actionFileName)) //reading function and payload as argument
    let payload = require((process.argv[3] || inputFileName))
    const mainFunction;
    if(openWhiskFunction.main){ //assigning a function to be executed
        mainFunction = openWhiskFunction.main; 
    }
    else
    {
        mainFunction = fallback(actionFileName);;
    }
    let promise = mainFunction(payload)

    if (promise.then) {
        promise.then(
            function (response) {
                console.log(JSON.stringify(response, null, 3))
            })
            .catch(
            function (reason) {
                console.error(JSON.stringify(reason, null, 3))
                return {}
            });
    }
    else {
        console.log(JSON.stringify(promise, null, 3))
    }
}
function fallback(action) {
    eval(require("fs").readFileSync(action, "utf-8"));
    if (main) {
        return main;
    } else {
        console.error(action + " has no function main or no exports.main");
        process.exit(1);
    }
}
MainFun()