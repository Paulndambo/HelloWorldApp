import React from 'react';
import { View, Text, Image } from 'react-native';


const Mwanafunzi = () => {
    return (
       <View>
          <Image 
            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
            style={{width: 200, height: 200}}
          />
          <Text>Hello, I Am a Cat!!</Text>
       </View>
    )
}

export default Mwanafunzi;
