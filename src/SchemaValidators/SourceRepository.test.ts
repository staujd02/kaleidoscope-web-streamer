import React from 'react';
import SourceRepositoryValidation from './SourceRepository';
import SourceValidation from './Source';

describe('The Source Repository Validator', () => {

    let repoState: SourceRepository;

    beforeEach(() => {
        repoState = {
            streams: [
                {
                    title: "A title",
                    duration: 5000,
                    isEnabled: false,
                    source: 'www.somewhere.com',
                    sortOrder: 3
                }
            ]
        }
    });

    it('should validate a correct repository', () => {
        expect(SourceRepositoryValidation.validate(repoState)).toEqual(true);
    });

    describe('when given an invalid repository', () => {

        describe('given that repo is missing a stream list', () => {

            beforeEach(() => {
                (repoState.streams as any) = undefined;
            });

            it('rejects it', () => {
                expect(SourceRepositoryValidation.validate(repoState)).toEqual(false);
            });
        });
        
        describe('given that repo has a stream that is invalid', () => {

            beforeEach(() => {
                spyOn(SourceValidation, 'validate').and.returnValue(false);
            });

            it('rejects it', () => {
                expect(SourceRepositoryValidation.validate(repoState)).toEqual(false);
            });
        });
    });
});