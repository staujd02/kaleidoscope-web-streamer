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
    millisecondsRemaining: number
}

interface LoaderProps {
    component: React.Component
}

interface LoaderState {
    doneLoading: boolean
}

interface TimeDisplayProps{
    time: number
}