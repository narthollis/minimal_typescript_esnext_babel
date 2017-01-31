
import { expand } from './missing_syntax';

describe('missing syntax', () => {
    it('should pass', () => {
        expect(expand({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    });
});