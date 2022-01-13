import React, { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    });
    return width;
};

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    })
};


function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    };
}

const DisplayName = () => {
    const surname = useFormInput("Ndamboski!");
    const name = useFormInput('Paul');

    //Getting The Window Width
    const width = useWindowWidth()
    console.log(`Current Width is: ${width} px`);

    //setting Site Title
    useDocumentTitle(name.value + " "+surname.value);

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <div>
            <input {...name} />
            <input {...surname}  />
            <h5>{name.length > 1 ? `Hello, ${name} ${surname}`: "Hello World!!"}</h5> 
            <hr/>

            <p>Current Width: {width} px</p>
        
        </div>
    )


}

export default DisplayName;