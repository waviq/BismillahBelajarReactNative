//import liblari untuk membuat component
import React from 'react'
import {StyleSheet, Text, View} from 'react-native';


//Membuat component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>

       
    )
};


/*
 Mengubah posisi sebuah view, menggunakan 2 properti:
 1. alignItems:'center',
 2. justifyContent:'center',
 * */


const styles = {
    viewStyle: {
        backgroundColor: '#3F51B5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop:20,
        shadowColor: '#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.2,
        elevation:5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color:'#fff'
    }
};

//Buat component agar bisa dipakai dicomponent yang lain
export default Header;