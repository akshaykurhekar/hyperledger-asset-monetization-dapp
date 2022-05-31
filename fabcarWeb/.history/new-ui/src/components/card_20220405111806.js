import React from 'react';
import {Card} from 'react-bootstrap'

const Cards = (props)=>{

    const carDetails = () =>{
        
    }
    
    
    return (
        <Card style={{ width: '17rem',margin:'10px' }}>
            <Card.Body>
                <Card.Title>{props.model}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="/carDetails">Show Details</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Cards;