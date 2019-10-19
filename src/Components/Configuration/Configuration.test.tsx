import React from 'react';
import { formatHTML } from '../../TestUtilities/htmlFormatter';
import { shallow, ShallowWrapper } from 'enzyme';
import Configuration from './Configuration';

describe('The Configuration Component', () => {

    let wrapper: ShallowWrapper<{}, {}, Configuration>
    let sourceRepository: SourceRepository
    let handleSave: jest.Mock;
    let doneConfiguring: jest.Mock;

    beforeEach(() => {
        sourceRepository = setupRepo(sourceRepository);
        wrapper = shallow(<Configuration handleSave={(handleSave = jest.fn())} doneConfiguring={(doneConfiguring = jest.fn())} sourceRepo={sourceRepository} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    it('renders the list of sources through the stream list', () => {
        expect(wrapper.find('StreamListCard').prop('sourceList')).toEqual(sourceRepository.streams);
    });

    function setupRepo(sourceRepository: SourceRepository) {
        sourceRepository = {
            streams: [{
                source: 'httpLink1...',
                title: 'Source 1',
                isEnabled: true,
                duration: 60,
                sortOrder: 1
            },
            {
                source: 'httpLink3...',
                title: 'Source 3',
                isEnabled: true,
                duration: 60,
                sortOrder: 3
            },
            {
                source: 'httpLink2..',
                title: 'Source 2',
                isEnabled: true,
                duration: 60,
                sortOrder: 2
            },
            {
                source: 'httpLink4..',
                title: 'Source 4',
                isEnabled: false,
                duration: 60,
                sortOrder: 4
            }
            ]
        };
        return sourceRepository;
    }
});
