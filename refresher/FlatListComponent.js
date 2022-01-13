import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const FlatListComponent = () => {
    return (
        <View>
            <FlatList
                data={[
                    {key: "James Waweru"},
                    {key: "Paul Ndambo"},
                ]}

                renderItem ={({item}) => 
                <Text>{item.key}</Text>
            }
            />
        </View>
    )
}

export default FlatListComponent
