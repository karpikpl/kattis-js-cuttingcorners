/*jshint esversion: 6, node: true*/
'use strict';

const Index = require('../index');
const assert = require('assert');

function testSolution(input) {

    const result = [];

    Index.init((ans) => result.push(ans), () => input.shift());
    Index.solution();

    return result;
}

describe('Solution', function () {

    describe('program', function () {

        [
            {
                input: ['5 0 3 4 7 7 6 10 1 4 0',
                        '5 0 0 3 5 6 7 9 8 6 0',
                        '0'],
                result: ['4 0 3 4 7 7 6 4 0',
                         '3 0 0 3 5 6 0']
            }
        ].forEach((testCase) => {

            it('should solve for ' + testCase.input, function () {

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
