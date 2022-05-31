import React from 'react';

const CarDetails = (props)=>{

    return (
        <>
        <div>{props.name}</div>
        <div>{props.make}</div>
        <div>{props.mo}</div>
        </>
    );
}

export default CarDetails;