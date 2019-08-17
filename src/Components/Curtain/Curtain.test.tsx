import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Curtain from './Curtain';

describe("The Curtain", () => {

    const children = <div>Now you see me!</div>;
    let wrapper: ShallowWrapper<CurtainProps, CurtainState>;

    beforeEach(() => {
        wrapper = shallow(
            <Curtain open={true}>
                {children}
            </Curtain>);
    });

    it('renders correctly', () => expect(wrapper.html()).toMatchSnapshot());

    describe("given the curtain is rolled back", () => {

        beforeEach(() => {
            wrapper.setProps({
                open: true
            });
        });

        it("displays its children", () => {
            expect(wrapper.contains(children)).toEqual(true);
        });
    });
    
    describe("given the curtain is across the stage", () => {

        beforeEach(() => {
            wrapper.setProps({
                open: false
            });
        });

        it("does not displays its children", () => {
            expect(wrapper.contains(children)).toEqual(false);
        });
    });

});