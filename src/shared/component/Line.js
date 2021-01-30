import React from "react";
import styled from "styled-components";

const StyledLine = styled.hr`
width: ${(props) => props.width ? '300px' : '328px'};
height: 0px;
border: 1px ${(props) => props.solid ? "solid" : "dashed"} #e1e1ed;
border-width: 0px 0px 1px 0px;
margin: ${(props) => props.margin ? '4px' : '16px'} 0px;
`;

export const Line = ({...props}) => {
    return (
        <StyledLine {...props}/>
    )
}
