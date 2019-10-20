/// <reference types="react-scripts" />

type Source = {
    source: string
    title: string
    duration: number
    isEnabled: boolean
    sortOrder: number
    key: number
}

type SourceRepository = {
    streams: Source[]
} 
