export default class SourceRepo {

    private SourceRepoKey = "StreamRepoKey_v1";

    public load(): SourceRepository | null {
        let repoString = localStorage.getItem(this.SourceRepoKey);
        if(!repoString)
            return null
        return JSON.parse(repoString) as SourceRepository;
    }

    public save(streamRepository: SourceRepository){
        let repoString = JSON.stringify(streamRepository);
        localStorage.setItem(this.SourceRepoKey, repoString);
    }

}