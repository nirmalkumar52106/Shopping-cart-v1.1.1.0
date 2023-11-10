import React from 'react';
import {Col} from 'react-bootstrap'
function Homecategorysec(props){
    return(
        <>
    <Col className={props.color1} ><img src={props.categoryimg} alt='randomimage'/>
    <h5>{props.categoryhead}</h5>
    <h6>{props.categoryhead2}</h6>
    </Col>
        </>
    )
}
export{Homecategorysec}