import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slider extends React.Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={2000} showStatus={false} stopOnHover={true}
            useKeyboardArrows={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <div  className='sliderin'>
                        <div className='sliderTextsection'>
                            <h1>Fresh Vegetables Big Discount</h1>
                            <h3>Save upto 50% on your first order</h3>
                            <form className="form">
                                <sapn><i class="fa-solid fa-paper-plane"></i></sapn>   <input type="email" placeholder="Enter your email adress" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                <div className='sliderin2'>
                        <div className='sliderTextsection'>
                            <h1>Fresh Vegetables Big Discount</h1>
                            <h3>Save upto 50% on your first order</h3>
                            <form className="form">
                                <sapn><i class="fa-solid fa-paper-plane"></i></sapn>   <input type="email" placeholder="Enter your email adress" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div> 
                </div>
                <div>
                <div className='sliderin3'>
                        <div className='sliderTextsection'>
                            <h1>Fresh Vegetables Big Discount</h1>
                            <h3>Save upto 50% on your first order</h3>
                            <form className="form">
                                <sapn><i class="fa-solid fa-paper-plane"></i></sapn>   <input type="email" placeholder="Enter your email adress" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}
export { Slider }








// function Slider() {
//     return (
//         <>
//             <div className='sliderin'>
//                 <div className='sliderTextsection'>
//                     <h1>Fresh Vegetables Big Discount</h1>
//                     <h3>Save upto 50% on your first order</h3>
//                     <form className="form">
//                      <sapn><i class="fa-solid fa-paper-plane"></i></sapn>   <input type="email" placeholder="Enter your email adress" />
//                         <button  type="submit">Subscribe</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export { Slider }