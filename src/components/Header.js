//import liblari untuk membuat component
import React from 'react'
import { Container, Content, Button, Text } from 'native-base';


//Membuat component
const Header = () => {
    const {textStyle, viewStyle} = styles;

    return (
        <Container>
            <Content>

                <Button small primary>
                    <Text>Default Small</Text>
                </Button>

            </Content>
        </Container>

       
    )
};

const shadowOpt = {
    width:160,
    height:170,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.2,
    x:0,
    y:3,
    style:{marginVertical:5}
}

/*
 Mengubah posisi sebuah view, menggunakan 2 properti:
 1. alignItems:'center',
 2. justifyContent:'center',
 * */


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
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
    }
};

//Buat component agar bisa dipakai dicomponent yang lain
export default Header;