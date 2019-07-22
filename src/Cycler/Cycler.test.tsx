import React from 'react';
import Cycler from './Cycler';
import renderer from 'react-test-renderer';

describe('The Cycler', () => {

    const SourceList = getSourceList() as Array<Source>;
    const CycleTime = 64000;

    it('renders correctly', () => {
        const tree = renderer
            .create(<Cycler sourceList={SourceList} cycleTime={CycleTime} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    function getSourceList(): Array<Source> {
        return [
            {
                source: "https://www.google.com",
                title: "Google"
            } as Source,
            {
                source: "https://www.facebook.com",
                title: "Facebook"
            } as Source
        ];
    }

});