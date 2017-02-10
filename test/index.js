/*jshint esversion: 6, node: true*/
'use strict';

const Index = require('../index');
const assert = require('assert');

function testSolution(input) {

    const result = [];

    Index.init((ans) => result.push(ans), () => input.shift());
    Index.solution();

    return result.length == 1 && result[0] || result;
}

describe('Solution', function() {

    describe('program', function() {

        [{
            input: ['6 6'],
            result: 7
        }, {
            input: ['6 4'],
            result: ['5', '6', '7']
        }, {
            input: ['12 20'],
            result: [
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21'
            ]
        }].forEach((testCase) => {

            it('should solve for ' + testCase.input, function() {

                // Arrange
                const input = testCase.input;

                // Act
                const result = testSolution(input);

                // Assert
                assert.deepEqual(result, testCase.result);
            });

        })
    });
});
