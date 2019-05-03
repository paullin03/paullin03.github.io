import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
    return(
        <Card style={{background: "#b3cde0"}}>
            <Card.Body>
                <Card.Img variant="top" src={props.src} style={{width: "auto", maxHeight: "20rem"}}/>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                <Card.Text>
                    {props.text}
                </Card.Text>
                {generateLink(props.href)}
            </Card.Body>
        </Card>
    );
}

function generateLink(href) {
    if (href) {
        return (<Card.Link href={href} target="_blank">GitHub Link</Card.Link>);
    } else {
        return;
    }
}
export default ProjectCard;

