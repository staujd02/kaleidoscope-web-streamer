import React from 'react';
import Cycler from './Cycler';
import { ShallowWrapper, shallow } from 'enzyme';
import { formatHTML } from '../../TestUtilities/htmlFormatter';

describe('The Cycler', () => {

    const SourceList = getSourceList() as Array<Source>;
    const cycleTime = 1000;
    const google = getSource1();
    const facebook = getSource2();

    let wrapper: ShallowWrapper<CyclerProps, CyclerState>;

    beforeEach(() => {
        wrapper = shallow(<Cycler sourceList={SourceList} cycleTime={cycleTime} />)
    });

    it('renders correctly', () => expect(formatHTML(wrapper.html())).toMatchSnapshot());

    describe("given the cycler time has ticked by", () => {

        beforeEach(done => {
            setTimeout(done, cycleTime / 2);
        });

        it("correctly displays the time left", () => {
            expect(
                (wrapper.find('TimeDisplay')
                    .getElement().props as TimeDisplayProps)
                    .time / 10000
            ).toBeCloseTo(cycleTime / 2 / 10000, 1);
        });
    });

    describe("given the cycler has reached then end of the list", () => {

        beforeEach(done => {
            setTimeout(done, cycleTime * 2);
        });

        it("cycles around to the first stream", () => {
            expect(
                (wrapper.find('Stream')
                    .getElement().props as StreamProps)
                    .source
                    .title
            ).toEqual(google.title);
        });
    });

    describe("given the time display was clicked", () => {
        beforeEach(() => {
            wrapper.find('TimeDisplay').simulate('click');
        });

        xit('cycles to the next stream', () => {
            expect(
                (wrapper.find('Stream')
                    .getElement().props as StreamProps)
                    .source
                    .title
            ).toEqual(facebook.title);
        });
    });

    describe("given the load time has elapsed", () => {

        it('cycles to the next stream', done => {
            setTimeout(() => {
                expect(
                    (wrapper.find('Stream')
                        .getElement().props as StreamProps)
                        .source
                        .title
                ).toEqual(facebook.title);
                done();
            }, cycleTime + 10);
        });

    });

    function getSourceList(): Source[] {
        return [
            getSource1(),
            getSource2()            
        ];
    }

    function getSource1(): Source {
        return {
            source: "https://www.google.com",
            title: "Google"
        } as Source
    }
    
    function getSource2(): Source {
        return {
            source: "https://www.facebook.com",
            title: "Facebook"
        }
    }

});