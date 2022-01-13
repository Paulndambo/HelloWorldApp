import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import styles from './style';

const CarItem = (props) => {
    return (
        <View styles={styles.carContainer}>
        <ImageBackground 
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
        />
    
          <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at KES. 1700,000</Text>
          </View>
    
        </View>
    )
};

export default CarItem;