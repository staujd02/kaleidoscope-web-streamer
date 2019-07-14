/// <reference types="react-scripts" />

interface StreamProps{
    source: Source
}

interface Source {
    source: string
    title: string
}

interface CyclerProps {
    sourceList: Array<Source>
    cycleTime: number
}

interface CyclerState {
    activeSource: number
}