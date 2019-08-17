import React from 'react';
import Loader from './Loader';
import { shallow, ShallowWrapper } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Loader', () => {
    
    const element = <label>Yelp!</label>;
    const loadTime = 100;
    let wrapper: ShallowWrapper<LoaderProps, LoaderState>;

    beforeEach(() => {
        wrapper = shallow(
            <Loader loadTime={loadTime}>
                {element}
            </Loader>)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    describe("given the load time has elapsed", () => {

        beforeEach(done => {
           setTimeout(done, loadTime); 
        });

        it("renders the loaded elements", () => {
            expect(wrapper.contains(element)).toEqual(true);
        });

    });
    
    describe("given the load time has not elapsed", () => {
        it("doesn't renders the loaded elements", () => {
            expect(wrapper.contains(element)).toEqual(false);
        });
    });

});