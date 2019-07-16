import React from 'react';
import Loader from './Loader';
import renderer from 'react-test-renderer';

const Component = <label>Yelp!</label> as unknown as React.Component;

describe('The Loader', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Loader component={Component} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});