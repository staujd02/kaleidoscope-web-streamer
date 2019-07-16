import React from 'react';
import LoadScreen from './LoadScreen';
import renderer from 'react-test-renderer';

describe('The Load Screen', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<LoadScreen />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});