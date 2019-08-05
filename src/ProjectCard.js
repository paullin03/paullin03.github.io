import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function ProjectCard(props) {
    return(
        <Card style={{background: "#b3cde0"}}>
            <Card.Body>
                {generateImages(props.src)}
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

function generateImages(images) {
    if (!images) {
        return;
    } else if (images.length == 1) {
        return generateCardImage(images[0]);
    }
    return <Carousel indicators={false}>{generateCarouselItems(images)}</Carousel>;
}

function generateCarouselItems(images) {
    return images.map(image => {
        return <Carousel.Item>{generateCardImage(image)}</Carousel.Item>;
    });
}

function generateCardImage(src) {
    return <Card.Img variant="top" src={src} style={{width: "auto", maxHeight: "20rem"}}/>;
}

function generateLink(href) {
    if (href) {
        return (
        <a class="footerLink" href={href} target="_blank">
            <img src={require("./images/github.png")}/>
        </a>);
    } else {
        return;
    }
}
export default ProjectCard;

