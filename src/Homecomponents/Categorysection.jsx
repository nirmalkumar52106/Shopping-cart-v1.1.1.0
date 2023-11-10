import React from "react";
import { Container } from "react-bootstrap";
import {Row} from 'react-bootstrap'
import { Homecategorydata } from "../Data";
import { Homecategorysec } from "./Category";


function Hmcategorydata(categorydata){
    return(
        <>
        <Homecategorysec categoryimg={categorydata.categoryimg} categoryhead={categorydata.categoryhead} categoryhead2={categorydata.categoryhead2} color1={categorydata.color1}/>
        </>
    )
}

function Homecategory1(){
    return(
        <>
        <section id="homecategroysec">
        <Container fluid>
        <div className="homecategroysecmn">
        <div className="homecategroysecbx">
        <Row>
            <div className="ctgrymain">
        {Homecategorydata.map(Hmcategorydata)}
        </div>
        </Row>
        </div>
        </div>
        </Container>
        </section>
        </>
    )
}
export{Homecategory1}