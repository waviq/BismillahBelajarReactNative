/**
 * Created by waviq on 23/03/2017.
 */

import React from 'react'
import {Text, TouchableOpacity, Alert} from 'react-native'

const Button = ({onPencet, children}) => {
    const {buttonStyle, textStyle} = styles
    return (
        <TouchableOpacity onPress={onPencet} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyle:{
      alignSelf:'center',
        color:'#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button