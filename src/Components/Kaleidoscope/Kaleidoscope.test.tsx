import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Kaleidoscope from './Kaleidoscope';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Kaleidoscope', () => {

    let wrapper: ShallowWrapper<KaleidoscopeProps, KaleidoscopeState, Kaleidoscope>

    beforeEach(() => {
        wrapper = shallow(<Kaleidoscope loadTime={1} />);
    });

    it('renders correctly',
        () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    describe('given the user is configuring the streams', () => {
        beforeEach(() => {
            wrapper.setState({
                isConfiguring: true
            });
        });

        it('renders correctly',
            () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
    });
});