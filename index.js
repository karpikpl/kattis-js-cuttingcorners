/*jshint esversion: 6, node: true*/
'use strict';

// put your solution in this method
function solution(toPrint, toRead) {

    const startAll = new Date();

    while (true) {
        // reading shapes
        const input = readline().split(' ');
        const n = parseInt(input[0]);

        if (n === 0)
            break;
        let name = 65;

        const shape = input.map((val, index) => {

                if (index % 2 !== 0) {
                    return {
                        x: val,
                        y: input[index + 1],
                        name: String.fromCharCode(name++)
                    };
                }
            })
            .filter(c => c);

        shape.forEach((val, index) => {
            const p1Index = index - 1 < 0 ? shape.length - 1 : index - 1;
            const p3Index = (index + 1) % shape.length;

            val.angle = getP2Angle(shape[p1Index], val, shape[p3Index]);
        });

        log(shape);
    }

    log(`Solved ALL in ${new Date() - startAll}`);
}

// run solution without any params for kattis
if (typeof process === 'undefined' || process.release.name !== 'node') {

    solution();
}

function getP2Angle(p1, p2, p3) {

    // https://www.mathsisfun.com/algebra/trig-cosine-law.html
    // cos(p2) = (|p1p2|^2 + \p2p3|^2 - \p1p3|^2) / 2*\p1p2||p2p3|
    const cosP2 = (Math.pow(dist(p1, p2), 2) + Math.pow(dist(p2, p3), 2) - Math.pow(dist(p1, p3), 2)) / (2 * dist(p1, p2) * dist(p2, p3));

    const acos = Math.acos(cosP2);

    return toDegrees(acos);
}

function dist(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function toDegrees(rad) {
    return rad * 180 / Math.PI;
}

// node js internals below -----------------------------------------------------

function init(toPrint, toRead) {

    // replace global functions with ones for node or tests
    // kattis is using 'print' and 'readline' for standard I/O
    if (typeof global !== 'undefined') {
        global.print = toPrint;
        global.readline = toRead;
    }
}

// interactive mode - input from command line
if (typeof process !== 'undefined' && process.argv[2] === 'i') {

    const Readline = require('readline');
    const input = [];

    const inputProcessor = Readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    inputProcessor.on('line', (line) => {

        input.push(line);

        if (!line) {
            inputProcessor.close();
        }
    });

    inputProcessor.on('close', () => {

        init(console.log, () => input.shift());

        solution();
    });
}

// input from process params
if (typeof process !== 'undefined' && process.argv[2] && process.argv[2] !== 'i') {

    const input = process.argv[2].split('\\n');
    init(console.log, () => input.shift());

    solution();
}

function log() {

    if (typeof process !== 'undefined' && process.release.name === 'node') {
        console.log.call(this, ...arguments);
    }
}

if (typeof module !== 'undefined') {
    module.exports.solution = solution;
    module.exports.init = init;
    module.exports.dist = dist;
    module.exports.getP2Angle = getP2Angle;
}
