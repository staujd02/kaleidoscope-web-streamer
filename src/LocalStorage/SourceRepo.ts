import SourceList from '../source-list.json';
import SourceRepositoryValidation from "../SchemaValidators/SourceRepository";

const SourceRepoKey = "StreamRepoKey_v1";

export default class SourceRepo {

    public static load(): SourceRepository {
        let repoString = localStorage.getItem(SourceRepoKey);
        if (!repoString)
            return this.emptyRepo();
        return JSON.parse(repoString) as SourceRepository;
    }

    public static save(sourceRepository: SourceRepository) {
        try {
            SourceRepositoryValidation.validate(sourceRepository)
            let repoString = JSON.stringify(sourceRepository);
            localStorage.setItem(SourceRepoKey, repoString);
        } catch (error) {
            console.log(error);
        }
    }

    public static emptyRepo(): SourceRepository {
        return {
            streams: SourceList
        }
    }

}