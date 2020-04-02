/// <reference types="react-scripts" />

interface StreamProps{
    source: Source
}

type ConfigureButtonProps = {
    buttonClickHandler: ButtonClickHandler 
}
type ButtonClickHandler = (event: ButtonClickEvent) => void
type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

interface CyclerProps {
    sourceList: Source[]
    openMenuCallback: ButtonClickHandler
}

interface CyclerState {
    activeSource: number
    millisecondsRemaining: number
    controlsVisible: boolean
    playbackPaused: boolean
}


interface CyclerControlProps {
    playBackMode: PlayBackMode
    onSkip?: ButtonClickHandler
    onPlayBack?: ButtonClickHandler 
    onMenuOpen?: ButtonClickHandler 
}

interface CyclerControlState {
}

type KaleidoscopeProps = {
    loadTime: number
}

type KaleidoscopeState = {
    isConfiguring: boolean
    sourceRepository: SourceRepository
}

interface CurtainProps {
    open: boolean
}

interface CurtainState {
}

interface LoaderProps {
    loadTime: number
    handleConfigureClick: ButtonClickHandler
}

interface LoaderState {
    doneLoading: boolean
}

interface TimeDisplayProps{
    time: number
    onClick?: ButtonClickHandler
}

type SortUpDisabled = boolean
type SortDownDisabled = boolean
type SortDisableList = [SortUpDisabled, SortDownDisabled]
type SourceListCardProps = {
    sourceList: Source[]
    handleSelectSource: (s: Source) => void
    addSource: () => void
    deleteSource: () => void
    sortUp: () => void
    sortDown: () => void
    sortDisabled: SortDisableList
    selectedIndex: number | null
}

type SourceControlRowProps = {
    addSource: () => void
    deleteSource: () => void
    sortUp: () => void
    sortDown: () => void
    sortDisable: SortDisableList
}

type SourceListCardState = {
    search: string
}

type SourceDetailsState = {
    error: string
    shock: boolean
}

type DetailUpdateEvent = (event: React.ChangeEvent<HTMLInputElement>) => void
type SourceDurationProps = {
    handleChange: DetailUpdateEvent
    duration: number
}
type SourceURLProps = {
    handleChange: DetailUpdateEvent
    shock: boolean
    url: string
}
type SourceTitleProps = {
    handleChange: DetailUpdateEvent
    shock: boolean
    title: string
}

type SourceDetailsProps = {
    handleUpdate: (source: Source) => void
    source: Source | null
}

type StreamPreviewProps = {
    source: Source | null
}

type ConfigurationProps = {
    sourceRepo: SourceRepository
    handleSave: (updatedRepo: SourceRepository) => void
    doneConfiguring: () => void
}

type ConfigurationState = {
    selectedSource: number | null
}

type SourceListState = {
    selectedIndex: number
}

type SourceListProps = {
    search?: string
    sources: Source[]
    selectedIndex: number | null
    handleSelectSource: (source: Source) => void
}