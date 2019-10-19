import React from 'react';
import SourceValidation from './Source';

describe('The Source Validator', () => {

    let sourceState: Source;

    beforeEach(() => {
        sourceState = {
                title: "A title",
                duration: 5000,
                isEnabled: false,
                source: 'www.somewhere.com',
                sortOrder: 3
            }
    });

    it('should validate a correct source', () => {
        expect(SourceValidation.validate(sourceState)).toEqual(true);
    });

    describe('when given an invalid source', () => {
        
        describe('given the sort order is negative', () => {
            beforeEach(() => {
                sourceState.sortOrder = -110;
            });

            it('rejects it', () => {
                expect(SourceValidation.validate(sourceState)).toEqual(false);
            });
        });
        
        describe('given the duration is negative', () => {
            beforeEach(() => {
                sourceState.duration = -110;
            });

            it('rejects it', () => {
                expect(SourceValidation.validate(sourceState)).toEqual(false);
            });
        });

        describe('given the duration is zero', () => {
            beforeEach(() => {
                sourceState.duration = 0;
            });

            it('rejects it', () => {
                expect(SourceValidation.validate(sourceState)).toEqual(false);
            });
        });

        describe('given that the source is missing a stream title', () => {

            beforeEach(() => {
                (sourceState.title as any) = undefined;
            });

            it('rejects it', () => {
                expect(SourceValidation.validate(sourceState)).toEqual(false);
            });
        });

        describe('given that the source is missing a stream duration', () => {
            
            beforeEach(() => {
                (sourceState.duration as any) = undefined;
            });

            it('rejects it', () => {
                expect(SourceValidation.validate(sourceState)).toEqual(false);
            });
        });
    });
});