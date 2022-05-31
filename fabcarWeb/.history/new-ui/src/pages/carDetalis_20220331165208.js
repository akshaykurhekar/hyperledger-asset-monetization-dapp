import React from 'react';

const CarDetails = (props)=>{

    return (
        <>
        <div>{props.name}</div>
        <div>{props.make}</div>
        <div>{props.o}</div>
        <div>{props.model}</div>
        </>
    );
}

export default CarDetails;