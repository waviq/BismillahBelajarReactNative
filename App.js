import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header'

export default class App extends React.Component {
    render() {
        return (
            <Header />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //backgroundColor: '#ffdb79',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

});
