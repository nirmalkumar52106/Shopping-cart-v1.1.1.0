import React from "react";
import { Socialicon } from "../Heading/Socialicon";


function Team() {
    return (
        <>
            <div className="ourteamtextsection">
                <div className="textin">
                    <h5>Our Team</h5>
                    <h1>Meet Our Expert Team</h1>
                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <button>View All Members</button>
                </div>
            </div>
        </>
    )
}

export { Team }


function Girlimgsection(props) {
    return (
        <>
            <div className="girlsection">
                <div className="girlimgsection">
                    <img src={props.girlimg} alt="girlimage" />
                </div>
                <div className="textposition">
                    <h1>{props.positionhead}</h1>
                    <h2>{props.positionhead2}</h2>
                    <Socialicon/>
                </div>
            </div>
        </>
    )
}

export { Girlimgsection }