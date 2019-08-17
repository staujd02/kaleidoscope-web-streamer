import React from 'react';
import Stream from './Stream';
import renderer from 'react-test-renderer';

describe('The Stream', () => {

    const Source = {
        title: "Google",
        source: "https://www.google.com"
    } as Source;

    it('renders correctly', () => {
        const tree = renderer
            .create(<Stream source={Source} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});