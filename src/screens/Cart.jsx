import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();




  return (

    <>
      <div className="cart-in">
        <div class="container">
          <div class="payment_details">
            <h1>Payment Information</h1>
            <div class="details_card">
              <div class="name_address">
                <div class="first_lastName">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div class="address">
                  <input type="text" onkeyup="change()" id="put" placeholder="Address" />
                  <input type="number" placeholder="Pincode" />
                  <input type="text" placeholder="Country" />
                </div>
              </div>
              <h1>Shipping Details</h1>
              <div class="shipping_card">
                <div class="new_card">
                  <h4>Same as personal</h4>
                  <p id="output">Bharat House Bombay Samachar Road</p>
                  <p>400001</p>
                </div>
                <div class="add_savedcard">
                  <h4>Saved Address</h4>
                  <p>Lokhandwala Complex, Andheri (west)</p>
                  <p>400053</p>
                </div>
              </div>
              <div class="proced_payment">
                <a href="">Procced to payment</a>
              </div>
            </div>
          </div>
          <div class="order_summary">
            <h1>Order Summary</h1>
            <div class="summary_card">
              {
                items.length > 0 ?
                  <>
                    {items.map((cartitems) => {
                      return (
                        <>
                          <div class="card_item">
                            <div class="product_img">
                              <img src={cartitems.itemimage} alt="" />
                            </div>
                            <div class="product_info">
                              <h1>{cartitems.snackname}</h1>
                              <p>{cartitems.itemname}</p>
                              <div class="close-btn">
                              <i onClick={() => { removeItem(cartitems.id) }} class="fa fa-close"></i>
                              </div>
                              <div class="product_rate_info">
                                <h1>$ {cartitems.quantity*cartitems.price}</h1>
                                <span onClick={() => updateItemQuantity(cartitems.id, cartitems.quantity - 1)} class="pqt-minus">-</span>
                                <span class="pqt">{cartitems.quantity}</span>
                                <span onClick={() => updateItemQuantity(cartitems.id, cartitems.quantity + 1)} class="pqt-plus">+</span>
                              </div>
                            </div>
                          </div>
                          <div class="order_service">
                            <p>Additional Service</p>
                            <h4>{cartitems.servicetax}</h4>
                          </div>
                        </>
                      )
                    })}

                  </> :
                  <><div className="product_info">
                    <h1><Link to="/home">Please Add some items from shop</Link></h1>
                  </div></>
              }
              <hr />
              <div class="order_price">
                <p>Order summary</p>
                <h4>{cartTotal}</h4>
              </div>


            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export { Cart }