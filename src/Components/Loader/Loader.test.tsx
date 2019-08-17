import React from 'react';
import Loader from './Loader';
import { shallow, ShallowWrapper } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Loader', () => {
    
    let wrapper: ShallowWrapper<LoaderProps, LoaderState>;

    beforeEach(() => {
        wrapper = shallow(
            <Loader loadTime={100}>
                <label>Yelp!</label>
            </Loader>)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

});