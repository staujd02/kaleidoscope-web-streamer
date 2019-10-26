import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class SourceList extends React.Component<SourceListProps, SourceListState> {

    constructor(props: SourceListProps) {
        super(props);
        this.state = {
            selectedIndex: -1
        }
    }

    render() {
        const { selectedIndex } = this.state;
        const sourceList = this.props.sources
            .map((source, idx) => (
                <ListItem
                    key={idx}
                    button
                    className={!source.isEnabled ? "disabled" : undefined}
                    selected={selectedIndex === idx}
                    onClick={event => this.handleListItemClick(event, idx)} >
                    <ListItemText primary={source.title} />
                </ListItem>
            ));
        return (
            <List aria-label="streams">
                {sourceList}
            </List>
        );
    }

    handleListItemClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) {
        event.preventDefault();
        this.setState({
            selectedIndex: index
        });
        this.props.handleSelectSource(this.props.sources[index]);
    }

}