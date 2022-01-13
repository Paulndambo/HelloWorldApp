import React from 'react';
import { Text, View } from 'react-native'

const Cat = (props) => {
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
}

const Hotel = () => {
    return(
        <View>
            <Cat name="Alfa Cafe"/>
            <Cat name="Lucina" />
        </View>
    );
}

export default Hotel;