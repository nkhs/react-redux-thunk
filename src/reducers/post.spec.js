import reducer from './post'

describe('post', () => {
    it('post', () => {
        const state = []
        expect(reducer(state, { type: 'FETCH_POSTS', payload: [{ test: 1 }] })).toEqual([{ test: 1 }])
        expect(reducer(state, { type: 'unkown', payload: [{ test: 1 }] })).toEqual([])
    })

})