import React from 'react';
import Loader from './Loader';
import { shallow, ShallowWrapper } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Loader', () => {
    
    const element = <label>Yelp!</label>;
    const loadTime = 100;
    let wrapper: ShallowWrapper<LoaderProps, LoaderState, Loader>;
    let handleClick: jest.Mock;

    beforeEach(() => {
        wrapper = shallow(
            <Loader handleConfigureClick={(handleClick = jest.fn())} loadTime={loadTime}>
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

    describe('Given the configure button is still visible', () => {
        describe('When the user click the config button', () => {
            beforeEach(() => {
                (wrapper.find('ConfigureButton').prop('buttonClickHandler') as ButtonClickHandler)
                ({} as ButtonClickEvent);
            });

            it('reveals the triggers the props callback', () => {
                expect(handleClick).toHaveBeenCalled();
            }); 
        });
    });
    
    describe("given the load time has not elapsed", () => {
        it("doesn't renders the loaded elements", () => {
            expect(wrapper.contains(element)).toEqual(false);
        });
    });

});