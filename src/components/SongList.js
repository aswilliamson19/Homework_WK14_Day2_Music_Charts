import React, {Component} from 'react';
import SongDetail from './SongDetail';

class SongList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: -1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selectedIndex: event.target.value })
        this.props.onSongSelected(event.target.value)
    }

    render() {
        // const options = this.props.songs.map((song, index) => {
        //     return (
        //         <option key={index} value={index}>{song.title}</option>
        //     )
        // })
        return (
            <div>
                <label>Choose a song: </label>
                <select 
                    id='song-selector' 
                    onChange={this.handleChange}
                    value={this.state.selectedIndex}>
                        <option disabled value={-1}>Which song?...</option>
                    {/* {options} */}
                </select>
            </div>
        )
    }
}

export default SongList;