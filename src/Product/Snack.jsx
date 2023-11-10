import React from "react";


function Snack() {
    return (
        <>
            <div className="snackbackground">
                <div className="snacktext">
                    <div className="snackheading">
                        <h1>Snack List.....</h1>
                        <h2>Try this 50% off on your first order....</h2>
                    </div>
                    <div className="snacklist">
                        <ul>
                            <li>
                                <a href="#"><i class="fa-solid fa-xmark"></i><spa>cobbage</spa></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa-solid fa-xmark"></i><spa>Brocolli</spa></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa-solid fa-xmark"></i><spa>Artichoke</spa></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa-solid fa-xmark"></i><spa>Clery</spa></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa-solid fa-xmark"></i><spa>Snipch</spa></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Snack }