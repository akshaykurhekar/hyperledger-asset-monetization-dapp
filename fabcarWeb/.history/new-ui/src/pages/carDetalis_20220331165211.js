import React from 'react';

const CarDetails = (props)=>{

    return (
        <>
        <div>{props.name}</div>
        <div>{props.make}</div>
        <div>{props.owner}</div>
        <div>{props.model}</div>
        </>
    );
}

export default CarDetails;