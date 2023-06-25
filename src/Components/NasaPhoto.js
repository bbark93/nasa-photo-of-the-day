import React from "react";
// import styled from 'styled-components'
import { WrapperDiv, H3font } from "./Fonts";

const NasaPhoto = (props) => {
    return (
        <WrapperDiv>
            <H3font>{props.photo.title}</H3font>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation">{props.photo.explanation}</p>
        </WrapperDiv>
    )
} 

export default NasaPhoto;

// div className="nasa-photo-wrapper"