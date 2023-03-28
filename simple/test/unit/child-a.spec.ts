import { expect } from 'chai';
import { foo } from '../../src/child-a.js';

describe('child-a', () => {
    describe('foo(...)', () => {
        it('should eventually return foo', async () => {
            expect(await foo()).to.equal('foo');
        })
    })
});
