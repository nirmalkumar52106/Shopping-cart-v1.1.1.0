import React from "react";
import girlimage from '../assests/images/girl.png'
import foodimg1 from '../assests/images/about-3.png'
import foodimg2 from '../assests/images/about-4.png'
import foodimg3 from '../assests/images/about-4 (1).png'


function Welcome() {
    return (
        <>
            <div className="welcomemain">
                <div className="welcomemainin">
                    <div className="girlimg">
                        <img src={girlimage} alt="girlimage" />
                    </div>
                    <div className="girltext">
                        <h1>Welcome to Nest</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p className="para2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                             by injected humour, or randomised words which don't look even slightly believable.
                              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in 
                              the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                             making this the first true generator on the Internet. It uses a dictionary of over 200</p>
                             <div className="imgsection">
                             <img src={foodimg1} alt="foodimg"/>
                             <img src={foodimg2} alt="foodimg"/>
                             <img src={foodimg3} alt="foodimg"/>
                             </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Welcome }