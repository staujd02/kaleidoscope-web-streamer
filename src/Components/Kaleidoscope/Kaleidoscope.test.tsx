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
            expect(wrapper.state().sourceRepository).toEqual(getStreams());
        });
    });

    describe('given the user is configuring the stream', () => {

        let data: SourceRepository;

        beforeEach(() => {
            wrapper.setState({
                isConfiguring: true
            });
            spyOn(SourceRepo, 'save');
            data = getStreams();
            data.streams[0].isEnabled = true;
            data.streams[0].sortOrder = 1;
            data.streams[1].sortOrder = 2;
            data.streams[2].sortOrder = 3;
            data.streams[3].sortOrder = 4;
            wrapper.instance().handleSave(data);
        });

        describe('and given they are finished', () => {
            describe('when they exit', () => {
                beforeEach(() => {
                    wrapper.instance().doneConfiguringCallback();
                });

                it('should resume cycling the streams with the new changes', () => {
                    expect(wrapper.find('Cycler').prop('sourceList')).toEqual(data.streams);
                });
            });
        });
    });

    describe('given the user is updating the configuration', () => {
        describe('when the repo is being updated', () => {
            describe('given it succeeds', () => {

                let data: SourceRepository;

                beforeEach(() => {
                    spyOn(SourceRepo, 'save');
                    data = getStreams();
                    data.streams.push(getStreams().streams[0]);
                    wrapper.instance().handleSave(data);
                });

                it('updates the current configuration', () => {
                    expect(SourceRepo.save).toHaveBeenCalled();
                });

                it('updates the state', () => {
                    expect(wrapper.state().sourceRepository).toEqual(data);
                });
            });
        });
    });

    describe('given the user is watching the cycler', () => {
        describe('when the user wants to see the menu', () => {

            beforeEach(() => {
                (wrapper.find('Cycler').prop('openMenuCallback') as () => void)();
            });

            it('displays the menu', () => {
                expect(wrapper.state().isConfiguring).toEqual(true);
            });
        });
    });

    describe('when handing off the streams to be displayed', () => {
        it('filters off the disabled streams', () => {
            expect((wrapper.find('Cycler').prop('sourceList') as Source[]).length).toEqual(3);
        });
        
        it('respects the sort order on the elements', () => {
            expect((wrapper.find('Cycler').prop('sourceList') as Source[])[2].sortOrder).toEqual(6);
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
        spyOn(SourceRepo, 'load').and.returnValue(getStreams());
    }

    function getStreams(): SourceRepository {
        return {
            streams: [
                {
                    title: 'Title 5',
                    sortOrder: 5,
                    source: "http5",
                    isEnabled: false,
                    duration: 50,
                    key: 5,
                },
                {
                    title: 'Title 2',
                    sortOrder: 2,
                    source: "http2",
                    isEnabled: true,
                    duration: 50,
                    key: 2,
                },
                {
                    title: 'Title 6',
                    sortOrder: 6,
                    source: "http6",
                    isEnabled: true,
                    duration: 50,
                    key: 6,
                },
                {
                    title: 'Title 1',
                    sortOrder: 1,
                    source: "http1",
                    isEnabled: true,
                    duration: 50,
                    key: 1,
                },
            ]
        };
    }
});