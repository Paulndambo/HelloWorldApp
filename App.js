import React from 'react';
import { Text, View } from 'react-native';
import Game2 from './components/Game2';
import Cat from './refresher/Hello';
import Hello2 from './refresher/Hello2';
import Hello1 from './refresher/Hello1';
import Hello11 from './refresher/Hello11';
import GetName from './components/TextInput';
//import Cafe from './refresher/MultipleComponents';
import Hotel from './refresher/MultipleProps';
import Student from './refresher/props/Student';
import Mwanafunzi from './refresher/Mwanafunzi';
import Cafe from './refresher/ComponentState';
import DisplayName from './refresher/Hooks/DisplayName';
import TextInputComponent from './refresher/TextInputComponent';
import ScrollableComponent from './refresher/ScrollableComponent';
import FlatListComponent from './refresher/FlatListComponent';
import SectionListComponent from './refresher/SectionListComponent';


const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
    
      <SectionListComponent />
    </View>
   
  );
}

export default App;