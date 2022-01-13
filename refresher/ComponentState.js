import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>I am {props.name}, and i am {isHungry ? "hungry" : "full"}</Text>

            <Button
                onPress={() => {
                    setIsHungry(false);
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, pleade!" : "Thank You!"}
            />
        
        </View>
    );

}

const Cafe = () => {
    return (
        <>
            <Cat name="Lucina" />
            <cat name="Alpha Hotel" />
        </>
    )
}

export default Cafe;