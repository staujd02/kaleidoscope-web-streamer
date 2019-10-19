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
}

interface CyclerState {
    activeSource: number
    millisecondsRemaining: number
    controlsVisible: boolean
    playbackPaused: boolean
}

interface CyclerControlProps {
    playBackMode: PlayBackMode
    onSkip?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
    onPlayBack?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
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
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}

type StreamListCardProps = {
    sourceList: Source[]
}

type ConfigurationProps = {
    sourceRepo: SourceRepository
    handleSave: (updatedRepo: SourceRepository) => void
    doneConfiguring: () => void
}

type StreamListState = {
    selectedIndex: number
}

type StreamListProps = {}