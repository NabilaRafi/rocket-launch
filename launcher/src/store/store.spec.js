import configureStore from './store';

const suite = "Test redux store";

describe(suite, function describeConfigureStore () {
    it ('should create a store with default app state', () => {
        const expected = { data: [] };
        const actual = configureStore.getState();
        expected(actual).toEqual(expected);
    })
});