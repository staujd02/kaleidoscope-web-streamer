import React from 'react';
import TimeDisplay from './TimeDisplay';
import renderer from 'react-test-renderer';

describe("The time display", () => {

    it('renders correctly', () => {
        let sixtyMinutesInMilli = 60 * 60 * 1000;
        let thirtySecondsInMilli = 3 * 1000;
        let combined = sixtyMinutesInMilli 
                + thirtySecondsInMilli;
        const tree = renderer
            .create(<TimeDisplay time={combined}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});