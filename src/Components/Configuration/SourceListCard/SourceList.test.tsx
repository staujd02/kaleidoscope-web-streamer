import React from 'react';
import { ShallowWrapper, shallow } from "enzyme";
import { formatHTML } from "../../../TestUtilities/htmlFormatter";
import SourceList from "./SourceList";

describe('The Source List', () => {

    let wrapper: ShallowWrapper<SourceListProps, SourceListState, SourceList>
    let props: SourceListProps;

    let handleSelectSource: jest.Mock;

    beforeEach(() => {
        props = {
            handleSelectSource: (handleSelectSource = jest.fn()),
            sources: getSources()
        }
        wrapper = shallow(<SourceList {...props} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    describe('when the user searches something', () => {

        beforeEach(() => {
            wrapper.setProps({
                search: '2'
            });
        });

        it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
        
        it('narrows the list to the matching elements by url and title', () => {
            expect( wrapper.find('WithStyles(ForwardRef(ListItem))').length)
            .toEqual(2);
        });
    });

    describe('when a user clicks on a list item', () => {

        beforeEach(() => {
            wrapper.find('.disabled').first().simulate('click', {
                preventDefault: jest.fn()
            });
        });

        it('informs the parent element that the item has been selected', () => {
            expect(handleSelectSource).toHaveBeenCalledWith(getSources()[2]);
        });

    });

    function getSources(): Source[] {
        return [
            {
                duration: 6000,
                isEnabled: true,
                sortOrder: 2,
                source: "http:",
                key: 2,
                title: "Title 2"
            },
            {
                duration: 6000,
                isEnabled: true,
                sortOrder: 1,
                source: "http:2",
                key: 1,
                title: "Title 1"
            },
            {
                duration: 6000,
                isEnabled: false,
                sortOrder: 3,
                source: "http",
                key: 3,
                title: "Title 3"
            }
        ]

    }
});