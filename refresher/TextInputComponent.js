import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';


const TextInputComponent = () => {
    const [text, setText] = useState('');
    return (
       <View style={{padding: 10}}>
           <TextInput
                style={{height: 40}}
                placeholder='Type to text to translate!!'
                onChangeText={text => setText(text)}
                defaultValue={text}
           />
           <Text style={{padding: 10, fontSize: 40}}>
               {text.split(' ').map((word) => word && '🌹🌹🌹🌹💖').join(' ')}
           </Text>
           
       </View>
    )
}

export default TextInputComponent
