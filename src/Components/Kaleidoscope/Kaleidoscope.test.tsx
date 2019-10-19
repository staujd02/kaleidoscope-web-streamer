import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Kaleidoscope from './Kaleidoscope';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import SourceRepo from '../../LocalStorage/SourceRepo';

describe('The Kaleidoscope', () => {

    let wrapper: ShallowWrapper<KaleidoscopeProps, KaleidoscopeState, Kaleidoscope>

    beforeEach(() => {
        establishMock();
        wrapper = shallow(<Kaleidoscope loadTime={1} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    describe('when the component mounts', () => {
        it('should load the streams from local storage', () => {
            expect(wrapper.state().sourceRepository).toEqual({
                streams: [{
                    title: 'Title 1',
                    sortOrder: 1,
                    source: "http1",
                    isEnabled: true,
                    duration: 50
                }]
            });
        });
    });

    describe('given the user is configuring the streams', () => {
        beforeEach(() => {
            wrapper.setState({
                isConfiguring: true
            });
        });

        it('provides the current configuration to the Configuration component', () => {
            expect(wrapper.find('Configuration').prop('sourceRepo')).toEqual(
                wrapper.state().sourceRepository
            );
        });

        it('renders correctly',
            () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
    });

    function establishMock() {
        spyOn(SourceRepo, 'load').and.returnValue({
            streams: [
                {
                    title: 'Title 1',
                    sortOrder: 1,
                    source: "http1",
                    isEnabled: true,
                    duration: 50
                }
            ]
        });
    }

});