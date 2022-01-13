import React from 'react';
import { Text, View } from 'react-native';

const Cat = () => {
    return (
        <View>
            <Text>Hello Cat Component!!</Text>
        </View>
    )
}

const Cafe = () => {
    return(
        <View>
            <Text>Welcome</Text>
            <Cat />
            <Cat />
        </View>
    )
}

export default Cafe;