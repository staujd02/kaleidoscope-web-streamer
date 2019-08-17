import React from 'react';
import Loader from './Loader';
import renderer from 'react-test-renderer';

describe('The Loader', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Loader loadTime={100}>
                <label>Yelp!</label>
            </Loader>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});