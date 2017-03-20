import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header headerText={'Albums'}/>
                <AlbumList/>
            </View>
        );
    }
}

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
*/

/*
Note

-> state:
    1. Plain javascript untuk record dan respon dari event trigger
    2. ketika ingin mengupdate component, menggunakan this.setState
    3. Untuk mengganti state hanya bisa menggunakan 'setState',
       TIDAK BISA menggunakan this.state
-> Membuat Looping d React menggunakan .map(namaArrayObjek => isi dari setiap objeknya)
*/
