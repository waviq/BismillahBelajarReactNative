import React from 'react'
import {View} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends React.Component {

    state = {
        albums:[]
    };

    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}))

            /*.then(function (response) {
                this.setState({almbums: response.data})
            })*/
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} albumProp={album}/>
        );
    }
    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }

}

export default AlbumList;