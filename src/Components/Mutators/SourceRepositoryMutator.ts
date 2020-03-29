class SourceRepositoryMutator {

    add(sourceRepo: SourceRepository): SourceRepository {
        let copy = sourceRepo.streams;
        return {
            ...sourceRepo,
            streams: copy.concat([{
                duration: 60,
                isEnabled: false,
                key: copy[copy.length - 1].key + 1,
                sortOrder: copy[copy.length - 1].sortOrder + 1,
                source: "",
                title: "New Stream"
            }])
        }
    }

    delete(sourceRepo: SourceRepository, key: number | null): SourceRepository{
        return {
            ...sourceRepo,
            streams: sourceRepo.streams.
            filter(s => s.key !== key) 
        }
    }

    update(sourceRepo: SourceRepository, s: Source): SourceRepository{
        let found = sourceRepo.streams
            .findIndex(source => source.key === s.key);
        if (found >= 0) {
            let copy = sourceRepo.streams;
            copy[found] = s;
            return {
                ...sourceRepo,
                streams: copy
            }
        }
        return sourceRepo;
    }
}

export default new SourceRepositoryMutator();