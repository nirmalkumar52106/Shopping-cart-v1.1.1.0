import React from "react";

function Performance(props) {
    return (
        <>
            <div className="performancemain">
                <div className="performanceimgsection">
                    <div className="imagesection">
                        <img src={props.performanceimgg} alt="performance" />
                    </div>
                    <div className="performancetextsection">
                        <h2>{props.heading1}</h2>
                        <h1>{props.heading2}</h1>
                        <p>{props.performpara1}</p>
                        <p>{props.performpara2}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Performance }