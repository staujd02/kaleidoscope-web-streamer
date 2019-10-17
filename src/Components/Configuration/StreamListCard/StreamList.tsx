import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class StreamList extends React.Component<StreamListProps, StreamListState> {

    constructor(props: StreamListProps){
        super(props);
        this.state = {
            selectedIndex: -1
        }
    }

    render() {
        const { selectedIndex } = this.state;
        return (
            <List aria-label="streams">
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={event => this.handleListItemClick(event, 2)}
                >
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={event => this.handleListItemClick(event, 3)}
                >
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
        );
    }

    handleListItemClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) {
        event.preventDefault();
        this.setState({
            selectedIndex: index
        });
    }

}