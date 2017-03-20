/**
 * Created by waviq on 19/03/2017.
 */

import React from 'react';
import {Text} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

class AlbumDetail extends React.Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>
                        {this.props.albumProp.title}
                    </Text>
                </CardSection>
            </Card>
        );
    }
}


export default AlbumDetail
