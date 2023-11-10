import React from "react";


function Ourhistory(props) {
    return (
        <>
            <div className="ourhistorymain">
                <div className="ourhistorybx">
                    <h1>{props.historyhead}</h1>
                    <p>{props.historypara}</p>
                </div>
            </div>
        </>
    )
}

export { Ourhistory }


function Background(props) {
    return (
        <>
            <div className="background">
            <div className="container">
                <div className="backgroundin">
                <div className="backgroundlistdata">
                    <h1>0+</h1>
                    <h2>Glorious years</h2>
                </div>
                <div className="backgroundlistdata">
                    <h1>90+</h1>
                    <h2>Happy clients</h2>
                </div>
                <div className="backgroundlistdata">
                    <h1>23+</h1>
                    <h2>Projects complete</h2>
                </div>
                <div className="backgroundlistdata">
                    <h1>60+</h1>
                    <h2>Team advisor</h2>
                </div>
                <div className="backgroundlistdata">
                    <h1>02+</h1>
                    <h2>Products Sale</h2>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export { Background }