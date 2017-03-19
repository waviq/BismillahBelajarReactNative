import React from 'react'
import {Text, View} from 'react-native'
import axios from 'axios'

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
        return this.state.albums.map(isi_album => <Text>{isi_album.title}</Text>)
    }
    render() {

        console.log('hasil :'+this.state.albums);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }

}

export default AlbumList;