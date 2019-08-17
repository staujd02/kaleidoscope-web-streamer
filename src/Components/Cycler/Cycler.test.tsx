import React from 'react';
import Cycler from './Cycler';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Cycler', () => {

    const SourceList = getSourceList() as Array<Source>;
    const CycleTime = 64000;

    let wrapper: ShallowWrapper<CyclerProps, CyclerState>;

    beforeEach(() => {
        wrapper = shallow(<Cycler sourceList={SourceList} cycleTime={CycleTime} />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());



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