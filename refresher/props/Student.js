import React from 'react';
import { View } from 'react-native';


const Student = (props) => {
    return (
        <div>
            <p>Hello, {props.name}, {props.age}</p>
        </div>
    )
}

export default Student;
