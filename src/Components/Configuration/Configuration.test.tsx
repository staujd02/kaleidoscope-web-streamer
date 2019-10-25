import React from 'react';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import { shallow, ShallowWrapper } from 'enzyme';
import Configuration from './Configuration';

describe('The Configuration Component', () => {

    let wrapper: ShallowWrapper<ConfigurationProps, ConfigurationState, Configuration>
    let sourceRepository: SourceRepository
    let handleSave: jest.Mock;
    let doneConfiguring: jest.Mock;
    let props: ConfigurationProps;

    beforeEach(() => {
        props = {
            sourceRepo: (sourceRepository = setupRepo(sourceRepository)),
            handleSave: (handleSave = jest.fn()),
            doneConfiguring: (doneConfiguring = jest.fn())
        }
        wrapper = shallow(<Configuration {...props} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    it('renders the list of sources through the source list', () => {
        expect(wrapper.find('SourceListCard').prop('sourceList')).toEqual(sourceRepository.streams);
    });

    it('renders the currently selected source ', () => {
        expect(wrapper.find('SourceDetails').prop('source')).toEqual(wrapper.state().selectedSource);
    });

    it('renders a button to restart the streams', () => {
        (wrapper.find('.resume-cycle').prop('onClick') as () => void)();
        expect(doneConfiguring).toHaveBeenCalled();
    });

    describe('when a user updates a source', () => {

        let updatedSource: Source;

        beforeEach(() => {
            updatedSource = sourceRepository.streams[2];
            wrapper.instance().handleSelectSource(updatedSource);
            updatedSource.title = "New Title";
            (wrapper
                .find('SourceDetails')
                .prop('handleUpdate') as (s: Source) => void)
                (updatedSource);
        })

        it('saves the changes to that source and that source alone', () => {
            sourceRepository.streams[2] = updatedSource;
            expect(handleSave).toHaveBeenCalledWith(sourceRepository);
        });
    });

    describe('when the user selects a source', () => {

        beforeEach(() => {
            (wrapper
                .find('SourceListCard')
                .prop('handleSelectSource') as (s: Source) => void)
                (sourceRepository.streams[0]);
        })

        it('updates the detail page', () => {
            expect(wrapper.find('SourceDetails').prop('source')).toEqual(sourceRepository.streams[0]);
        });

        it('updates the preview stream', () => {
            expect(wrapper.find('StreamPreview').prop('source')).toEqual(sourceRepository.streams[0]);
        });
    });


    function setupRepo(sourceRepository: SourceRepository) {
        sourceRepository = {
            streams: [{
                source: 'httpLink1...',
                title: 'Source 1',
                isEnabled: true,
                duration: 60,
                sortOrder: 1,
                key: 1
            },
            {
                source: 'httpLink3...',
                title: 'Source 3',
                isEnabled: true,
                duration: 60,
                sortOrder: 3,
                key: 4
            },
            {
                source: 'httpLink2..',
                title: 'Source 2',
                isEnabled: true,
                duration: 60,
                sortOrder: 2,
                key: 2
            },
            {
                source: 'httpLink4..',
                title: 'Source 4',
                isEnabled: false,
                duration: 60,
                sortOrder: 4,
                key: 15
            }
            ]
        };
        return sourceRepository;
    }
});
