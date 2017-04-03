/**
 * Created by waviq on 19/03/2017.
 */

import React from 'react';
import {Text, View, Image, Alert, Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class AlbumDetail extends React.Component {
    render() {
        const {thumnailStyle,
            headerContentStyle,
            thumnailContainerStyle,
            headerTextStyle,
            imagesStyle} = styles
        const {thumbnail_image} = this.props.albumProp

        return (
            <Card>
                <CardSection>
                    <View style={thumnailContainerStyle}>
                        <Image style={thumnailStyle} source={{uri: thumbnail_image}}/>
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{this.props.albumProp.title}</Text>
                        <Text style={headerTextStyle}>{this.props.albumProp.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imagesStyle} source={{uri: this.props.albumProp.image}}/>
                </CardSection>
                <CardSection>
                    <Button onPencet={() => Linking.openURL(this.props.albumProp.url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',//biar tipenya jd tipe kolom k bawah
        justifyContent: 'space-around' //biar rata kanan n kiri
    },
    headerTextStyle:{
        fontSize: 18
    },
    thumnailStyle: {
        height: 50,
        width: 50
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imagesStyle: {
        height:300,
        flex: 1,
        width:null
    }
};


export default AlbumDetail
