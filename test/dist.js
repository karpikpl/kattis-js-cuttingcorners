/*jshint esversion: 6, node: true*/
'use strict';

const Index = require('../index');
const assert = require('assert');

describe('distance', () => {

    it('shoud return distance between 2 points (0,0) (3,4)', () => {

        const p1 = {x: 0, y: 0};
        const p2 = {x: 3, y: 4};

        // Act
        const result = Index.dist(p1,p2);

        // assert
        assert.equal(result, 5);
    });

    it('shoud return distance between 2 points (-1,-1) (3,2)', () => {

        const p1 = {x: -1, y: -1};
        const p2 = {x: 3, y: 2};

        // Act
        const result = Index.dist(p1,p2);

        // assert
        assert.equal(result, 5);
    });
})
