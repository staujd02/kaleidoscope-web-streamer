import SourceList from '../source-list.json';
import SourceRepositoryValidation from "../SchemaValidators/SourceRepository";

const SourceRepoKey = "StreamRepoKey_v1";

export default class SourceRepo {

    public static load(): SourceRepository {
        let repoString = localStorage.getItem(SourceRepoKey);
        if(!repoString)
            return this.emptyRepo();
        return JSON.parse(repoString) as SourceRepository;
    }

    public static save(sourceRepository: SourceRepository){
        if(SourceRepositoryValidation.validate(sourceRepository)){
            alert('Refused to save changes. The list of streams are not in a valid format.');
            return;
        }
        let repoString = JSON.stringify(sourceRepository);
        localStorage.setItem(SourceRepoKey, repoString);
    }

    public static emptyRepo(): SourceRepository{
        return {
            streams: SourceList 
        }
    }

}