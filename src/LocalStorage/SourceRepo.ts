const SourceRepoKey = "StreamRepoKey_v1";

export default class SourceRepo {

    public static load(): SourceRepository {
        let repoString = localStorage.getItem(SourceRepoKey);
        if(!repoString)
            return this.emptyRepo();
        return JSON.parse(repoString) as SourceRepository;
    }

    public static save(streamRepository: SourceRepository){
        let repoString = JSON.stringify(streamRepository);
        localStorage.setItem(SourceRepoKey, repoString);
    }

    public static emptyRepo(): SourceRepository{
        return {
            streams: []
        }
    }

}