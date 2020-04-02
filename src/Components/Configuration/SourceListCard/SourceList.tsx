import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class SourceList extends React.Component<SourceListProps, SourceListState> {

    render() {
        const { search, selectedIndex } = this.props;
        const sourceList = this.props.sources
            .filter(source => search 
                ? source.title.includes(search) 
                || source.source.includes(search) : true)
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((source, idx) => (
                <ListItem
                    key={idx}
                    button
                    className={!source.isEnabled ? "disabled" : undefined}
                    selected={selectedIndex === source.key}
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
        this.props.handleSelectSource(this.props.sources[index]);
    }

}