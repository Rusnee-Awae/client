const readline = require('readline');

function prompt(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve, reject) {
        rl.question(question, function (answer) {
            rl.close();
            resolve(answer.trim());
        });
    });
}

(async function () {

    let a = Number(await prompt("Enter first number: "));
    let b = Number(await prompt("Enter second number: "));
    let c = Number(await prompt("Enter second number: "));
    let d = Number(await prompt("Enter second number: "));
    console.log("%d * %d   = %d", a,3 ,a*3);
    console.log("%d * %d   = %d", b,3 ,b*3);
    console.log("%d * %d   = %d", c,3 ,c*3);
    console.log("%d * %d   = %d", d,3 ,d*3);

})();