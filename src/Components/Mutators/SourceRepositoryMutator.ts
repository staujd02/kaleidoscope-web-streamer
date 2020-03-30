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
            streams: sourceRepo.streams
                .filter(s => s.key !== key) 
        }
    }
    
    sortDown(sourceRepo: SourceRepository, key: number | null): SourceRepository {
        return this.shift(sourceRepo, key, 1);
    }

    sortUp(sourceRepo: SourceRepository, key: number | null): SourceRepository {
        return this.shift(sourceRepo, key, -1);
    }

    shift(sourceRepo: SourceRepository, key: number | null, adjustment: number){
        let s = sourceRepo.streams.find(s => s.key === key);
        if (s) {
            const newOrder = s.sortOrder + adjustment;
            let precedingSource = sourceRepo.streams.find(src => src.sortOrder === newOrder);
            s.sortOrder = newOrder;
            let updates = [s];
            if (precedingSource) {
                precedingSource.sortOrder += -1 * adjustment;
                updates.push(precedingSource);
            }
            return this.updateMany(sourceRepo, updates);
        }
        return sourceRepo;
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
    
    updateMany(sourceRepo: SourceRepository, s: Source[]): SourceRepository{
        for (let i = 0; i < s.length; i++) {
            sourceRepo = this.update(sourceRepo, s[i]);
        }
        return sourceRepo;
    }
}

export default new SourceRepositoryMutator();