import React from "react";
import { FoodCategory } from "../Product/Category";
import { Allitems } from "../Product/Items";
import { Snack } from "../Product/Snack";
import { AllitemData, CartData, DealData, FoodCategoryData, HelplineData, LogoData, MenuData, FuterData, NewproductData } from "../Data";
import { Cartsection, Logo } from "../Header/Logosection";
import { Helpline, Menu } from "../Header/Menu";
import { Ctegoryheading } from "../Heading/Categoryheading";
import { Itemheading } from "../Heading/Items";
import { DealofDay } from "../Product/DealoftheDay";
import { Dealheading } from "../Heading/DealoftheDay";
import { Newsletter } from "../Aboutcomponents/Newsletter";
import { Footerlogosectionn, FuterContent, Paymentmethod } from "../Aboutcomponents/Footer";
import { FooterTemplate } from "../Aboutcomponents/Footertemlate";
import { Pricefillheading } from "../Heading/Fillpriceheading";
import { Priceslider } from "../Product/Pricefill";
import { ColorCheckbox } from "../Product/Checkbox";
import { Newproducts } from "../Product/Newproduct";
import { Newproductheading } from "../Heading/Newproduct";
import { Juice } from "../Product/Juice";






function LogocardData(logo) {
    return (
        <>
            <Logo logoimg={logo.logoimg} heading1={logo.heading1} />

        </>
    )
}

function Cartcardata(cart) {
    return (
        <>
            <Cartsection icon={cart.icon} iconheading={cart.iconheading} cartlink={cart.cartlink} />
        </>
    )
}
function Menucardata(menu) {
    return (
        <>
            <Menu menulist={menu.menulist} headphoneimg={menu.headphoneimg} list={menu.list} url={menu.url} />
        </>
    )
}
function HelplinecardData(help) {
    return (
        <>
            <Helpline headphoneimg={help.headphoneimg} headphonehead1={help.headphonehead1} headphonehead2={help.headphonehead2} />

        </>
    )
}
function CategoryfoodCardData(food) {
    return (
        <>
            <FoodCategory foodicon={food.foodicon} foodname={food.foodname} foodcount={food.foodcount} />
        </>
    )
}
function AllitemcardData(item) {
    return (
        <>
            <Allitems itemimage={item.itemimage} snackname={item.snackname} itemname={item.itemname}
                actualprice={item.actualprice} pastprice={item.pastprice} />
        </>
    )
}
function DealcardData(deal) {
    return (
        <>
            <DealofDay dealimage={deal.dealimage} countdown1={deal.countdown1} countdown2={deal.countdown2} countdown3={deal.countdown3}
                countdown4={deal.countdown4} time1={deal.time1} time2={deal.time2} time3={deal.time3} time4={deal.time4} itemname={deal.itemname}
                actualprice={deal.actualprice} pastprice={deal.pastprice} />
        </>
    )
}
function FootercardData(footer) {
    return (
        <>

            <FuterContent contentheading={footer.contentheading} content1={footer.content1} content2={footer.content2} content3={footer.content3}
                content4={footer.content4} content5={footer.content5} content6={footer.content6} content7={footer.content7} />
        </>
    )
}
function NewproductCardData(product) {
    return (
        <>
            <Newproducts newproductimg={product.newproductimg} newproducthead1={product.newproducthead1} productrupee={product.productrupee} />
        </>
    )
}

function Product() {
    return (
        <>

            <section className="Header">
                <div className="container">
                    <div className="headermain">
                        <div className="logosection">
                            {LogoData.map(LogocardData)}
                        </div>
                        <div className="cartmain">
                            {CartData.map(Cartcardata)}
                        </div>
                    </div>
                    <div className="menumain">
                        <div className="menuin">
                            <ul>
                                {MenuData.map(Menucardata)}
                            </ul>
                        </div>
                        <div className="helplinemain">
                            {HelplineData.map(HelplinecardData)}
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="snackmainsection">
                    <Snack />
                </div>
                <div className="categoryitemsMain">
                    <div className="categorymn">
                        <div className="categorymain">
                            <Ctegoryheading />
                            {FoodCategoryData.map(CategoryfoodCardData)}
                        </div>
                        <div className="priceslidermain">
                            <Pricefillheading />
                            <Priceslider />
                            <ColorCheckbox />
                        </div>
                        <div className="newproductmain">
                            <Newproductheading />
                            {NewproductData.map(NewproductCardData)}
                        </div>
                        <Juice />
                        <Juice />
                        <Juice />
                    </div>
                    <div className="Allitemsmain">
                        <Itemheading />
                        <div className="itemflex">
                            {AllitemData.map(AllitemcardData)}
                        </div>
                        <Dealheading />
                        <div className="dealofdaymainSection">
                            {DealData.map(DealcardData)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="newslettermain">
                <Newsletter />
            </div>

            <div className="footerContainer">
                <div className="footermain">
                    <Footerlogosectionn />
                    {FuterData.map(FootercardData)}
                    <Paymentmethod />
                </div>
                <FooterTemplate />

            </div>
        </>
    )
}

export { Product }