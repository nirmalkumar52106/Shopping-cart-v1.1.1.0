import React from "react";


function Newsletter() {
    return (
        <>
            <div className="bgbackground">
                <div className="newslettertext">
                    <h1>Stay home & get your daily needs from our shop</h1>
                    <h3>Start You'r Daily Shopping with Nest Mart</h3>
                    <form className="form">
                     <sapn><i class="fa-solid fa-paper-plane"></i></sapn>   <input type="email" placeholder="Enter your email adress" />
                        <button  type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export { Newsletter }