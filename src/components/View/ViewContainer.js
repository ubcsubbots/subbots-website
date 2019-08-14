import React from 'react';
import Container from 'react-bootstrap/Container';

export default function ViewContainer(props){
    return(
        <div className="ViewContainer">
            <Container fluid className="p-0">
                {props.children}
            </Container>
        </div>
    )
}