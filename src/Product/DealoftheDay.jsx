import React, { useState, useRef, useEffect } from 'react'
import { FeedbackStar } from "../Heading/Feedback";


function DealofDay(props) {
    // const Ref = useRef(null);
    // const [timer, setTimer] = useState('00:00:00');
    // const getTimeRemaining = (e) => {
    //     const total = Date.parse(e) - Date.parse(new Date());
    //     const seconds = Math.floor((total / 1000) % 60);
    //     const minutes = Math.floor((total / 1000 / 60) % 60);
    //     const hours = Math.floor((total / 1000 * 60 * 60) % 24);
    //     return {
    //         total, hours, minutes, seconds
    //     };
    // }
    // const startTimer = (e) => {
    //     let { total, hours, minutes, seconds }
    //         = getTimeRemaining(e);
    //     if (total >= 0) {
    //         setTimer(
    //             (hours > 30 ? hours : '10' + hours) + ':' +
    //             (minutes > 30 ? minutes : '10' + minutes) + ':'
    //             + (seconds > 30 ? seconds : '10' + seconds)
    //         )
    //     }
    // }
    // const clearTimer = (e) => {
    //     if (Ref.current) clearInterval(Ref.current);
    //     const id = setInterval(() => {
    //         startTimer(e);
    //     }, 1000)
    //     Ref.current = id;
    // }
    // const getDeadTime = () => {
    //     let deadline = new Date();
    //     deadline.setSeconds(deadline.getSeconds() + 10);
    //     return deadline;
    // }
    // useEffect(() => {
    //     clearTimer(getDeadTime());
    // }, []);
    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // }
    return (
        <>
            <div className="dealoftheday">
                <div className="imgggSection">
                    <img src={props.dealimage} alt="dealoftheDay" />
                </div>
                <div className="countdownsectionMain">
                    <div className="countdown">
                        <ul>
                            <li>{props.countdown1}<span>{props.time1}</span> </li>
                            <li>{props.countdown2}<span>{props.time2}</span> </li>
                            <li>{props.countdown3} <span>{props.time3}</span></li>
                            <li>{props.countdown4}<span>{props.time4}</span> </li>
                            
                        </ul>
                    </div>
                    <div className="dealofDayitemsDetails">
                        <h4>{props.itemname}</h4>
                        <FeedbackStar />
                        <h3>By<span className="colorgreen">Nest Food</span></h3>
                        <div className="price">
                            <h1>{props.actualprice}</h1>
                            <h3>{props.pastprice}</h3>
                            <a href="cart"><i class="fa-solid fa-cart-shopping"></i><span>Add</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { DealofDay }