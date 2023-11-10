import React from "react";
import { BestpriceData, CartData, FuterData, GirlimageData, HelplineData, LogoData, MenuData, OurhistoryData, PerformanceData } from "../Data";
import { Cartsection, Logo } from "../Header/Logosection";

import { Helpline, Menu } from "../Header/Menu";
import { Welcome } from "../Aboutcomponents/Welcome";
import { Provideheading } from "../Heading/Provide";
import { Bestprice } from "../Aboutcomponents/Bestprice";
import { Performance } from "../Aboutcomponents/Performance";
import { Background, Ourhistory } from "../Aboutcomponents/Ourhistory";
import { Ourteamheading } from "../Heading/Ourteamheading";
import { Girlimgsection, Team } from "../Aboutcomponents/Ourteam";
import { Newsletter } from "../Aboutcomponents/Newsletter";
import { Footerlogosectionn, FuterContent, Paymentmethod } from "../Aboutcomponents/Footer";
import { FooterTemplate } from "../Aboutcomponents/Footertemlate";


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
function BestpriceCardData(price) {
  return (
    <>
      <Bestprice bestpriceimage={price.bestpriceimage} priceheading={price.priceheading} pricepara={price.pricepara}
        pricebutton={price.pricebutton} />
    </>
  )
}
function PerformancecardData(perform) {
  return (
    <>
      <Performance performanceimgg={perform.performanceimgg} heading1={perform.heading1} heading2={perform.heading2}
        performpara1={perform.performpara1} performpara2={perform.performpara2} />
    </>
  )
}
function OurhistoryCardData(history) {
  return (
    <>
      <Ourhistory historyhead={history.historyhead} historypara={history.historypara} />
    </>
  )
}
function GirlimagecardData(girl) {
  return (
    <>
      <Girlimgsection girlimg={girl.girlimg} positionhead={girl.positionhead} positionhead2={girl.positionhead2} />
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

function About() {
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
        <div className="welcomenestSection">
          <Welcome />
        </div>
        <div className="providesection">
          <Provideheading />
        </div>
        <div className="bestpricemn">
          {BestpriceData.map(BestpriceCardData)}
        </div>
        <div className="performance">
          {PerformanceData.map(PerformancecardData)}
        </div>
        <div className="ourhistory">
          {OurhistoryData.map(OurhistoryCardData)}
        </div>
      </div>
      <div className="backgroundmain">
        <Background />
      </div>
      <div className="container">
        <Ourteamheading />
        <div className="ourteammain">
          <Team />
          <div className="girlmain">
            {GirlimageData.map(GirlimagecardData)}
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

export { About }