import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../../TestUtilities/htmlFormatter';
import SourceDetails from './SourceDetails';

describe('The Source Detail Component', () => {

    let wrapper: ShallowWrapper<SourceDetailsProps, {}, SourceDetails>
    let props: SourceDetailsProps;

    let handleUpdate: jest.Mock;

    beforeEach(() => {
        props = {
            handleUpdate: (handleUpdate = jest.fn()),
            source: {
                duration: 6000,
                isEnabled: true,
                sortOrder: 5,
                source: "www.somewhere",
                title: "The Best Source",
                key: 3
            }
        }
        wrapper = shallow(<SourceDetails {...props} />);
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());
    
    describe('given the user wants to make a change to a toggle button', () => {

        beforeEach(() => {
            wrapper.find('#enable-toggle').simulate('click', {
                target: {
                    checked: true,
                    name: wrapper.find('#enable-toggle').prop('name')
                }
            });
        });

        it("saved through the parent's callback", () => {
            expect(handleUpdate).toHaveBeenCalledWith({
                ...props.source,
                isEnabled: false
            });
        });
    });

    describe('given the user makes a change', () => {

        beforeEach(() => {
            wrapper.find('#duration').simulate('change', {
                target: {
                    value: "5000",
                    name: wrapper.find('#duration').prop('name')
                }
            });
        });

        it("saved through the parent's callback", () => {
            expect(handleUpdate).toHaveBeenCalledWith({
                ...props.source,
                duration: "5000"
            });
        });
    });

    describe('when the user inputs a bad value', () => {
        describe('given it throws an error', () => {
            const exceptionMessage = 'Blarg!';

            beforeEach(() => {
                handleUpdate.mockImplementation(() => {
                    throw new Error(exceptionMessage);
                });
                wrapper.find('#duration').simulate('change', {
                    target: {
                        value: "-5000",
                        name: "duration"
                    }
                });
            });

            it('shows the user what went wrong', () => {
                expect(wrapper.find('#durationLabel').prop('error')).toEqual(true);
            });

            describe('given the user made the necessary corrections', () => {

                beforeEach(() => {
                    handleUpdate.mockImplementation(() => { });
                    wrapper.find('#duration').simulate('change', {
                        target: {
                            value: "-5000",
                            name: "duration"
                        }
                    });
                });

                it("removes the old error's information", () => {
                    expect(wrapper.find('#durationLabel').prop('error')).toEqual(false);
                });
            });
        });
    });

});