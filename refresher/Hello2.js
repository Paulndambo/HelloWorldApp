import React from 'react';

//Functions
const getFullname = (firstName, middleName, lastName) => {
    return firstName + " " + middleName + " " + lastName;
};

//Custom Components


const Hello2 = () => {
    const name = "Paul Ndambo";
    return (
        <div>
            <h3>This is a Functional Component!!</h3>
            <hr/>
            <h5>Hello, {name}</h5>
            <hr/>
            <Text>
                Hello, I am {getFullname("Irene", "Wavinya", "Muthiani")}!
            </Text>
        </div>
    )
}

export default Hello2
