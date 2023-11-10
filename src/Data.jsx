

import logo from './assests/images/logo.svg'
import headphone from './assests/images/icon-headphone - Copy.svg'
import icon1 from './assests//images/1.svg'
import icon2 from './assests//images/2.svg'
import icon3 from './assests//images/3.svg'
import icon4 from './assests//images/4.svg'
import icon5 from './assests//images/5.svg'
import icon6 from './assests//images/6.svg'
import perimage from './assests//images/performace1.png'
import girlistimg from './assests/images/girl1.png'
import girl2ndimg from './assests/images/girl2.png'
import categoryicon1 from './assests//images//category-1 - Copy.svg'
import categoryicon2 from './assests//images//category-2 - Copy.svg'
import categoryicon3 from './assests//images//category-3 - Copy.svg'
import categoryicon4 from './assests//images//category-4 - Copy.svg'
import categoryicon5 from './assests//images//category-5 - Copy.svg'
import itemimage1 from './assests/images//product-1-1 - Copy.jpg'
import itemimage2 from './assests/images//product-2-2 - Copy.jpg'
import itemimage3 from './assests/images//product-4-2 - Copy.jpg'
import itemimage4 from './assests/images//product-5-2 - Copy.jpg'
import itemimage5 from './assests/images//product-6-2 - Copy.jpg'
import itemimage6 from './assests/images//product-7-2 - Copy.jpg'
import itemimage7 from './assests/images//product-8-2 - Copy.jpg'
import itemimage8 from './assests/images//product-9-2 - Copy.jpg'

import dealimage1 from './assests/images/banner-5 - Copy.png'
import dealimage2 from './assests/images/banner-6 - Copy.png'
import dealimage3 from './assests/images/banner-7 - Copy.png'
import dealimage4 from './assests/images/banner-8 - Copy.png'
import newimage from './assests/images/thumbnail-3.jpg'
import kiwi from './assests/images/cat-1 - Copy.png'
import peach from './assests/images/cat-11 - Copy.png'
import apple from './assests/images/cat-9 - Copy.png'
import snack from './assests/images/cat-3 - Copy.png'
import vegetable from './assests/images/cat-1 - Copy.png'
import strawbeery from './assests/images/cat-2 - Copy.png'
import blackplum from './assests/images/cat-4 - Copy.png'
import custard from './assests/images/cat-5 - Copy.png'
import coffee from './assests/images/cat-14 - Copy.png'
import headphn from './assests/images/cat-15 - Copy.png'
import banner1 from './assests/images/banner-1 - Copy.png'
import banner2 from './assests/images/banner-2 - Copy.png'
import banner3 from './assests/images/banner-3 - Copy.png'


let LogoData=[
    {
        logoimg:`${logo}`,
        heading1:"All Categories",

    }
]

let CartData=[
    {
        icon:<i class="fa-solid fa-recycle"></i>,
        iconheading:"Compare",
        cartlink:"/product"
      
    },
    {
        icon:<i class="fa-solid fa-heart"></i>,
        iconheading:"Whislist",
        cartlink:"/product"
       
    },
    {
        icon:<i class="fa-solid fa-cart-shopping"></i>,
        iconheading:"Cart",
        cartlink:"/cart"
      
    },
    // {
    //     icon:<i class="fa-solid fa-user"></i>,
    //     iconheading:"Account",
       

    // }
]

let MenuData = [
    {
        menulist:"Home",
        list:"active",
        url:"/home"
    },
    {
        menulist:"About us",
        url:"/about"
    },
    {
        menulist:"Shop",
        url:"/product"
    },
    {
        menulist:"Menu",
        url:"/error"
    },
    {
        menulist:"Vendors",
        url:"/vendor"
    },
   
    {
        menulist:"Pages",
        url:"/error"
    },
    {
        menulist:"contact",
        url:"/error"
    },
    {
        menulist:"Account",
        url:"/Account"
    },

]

let HelplineData=[
    
        {
            headphoneimg:`${headphone}`,
        headphonehead1:"1988-899",
        headphonehead2:"24/7 Customers Support"

        }
    
]

let BestpriceData=[
    {
        bestpriceimage:`${icon1}`,
        priceheading:"Best Price & Offers",
        pricepara:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        pricebutton:"Read More"
    },
    {
        bestpriceimage:`${icon2}`,
        priceheading:"Wide Assortment",
        pricepara:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        pricebutton:"Read More"
    },
    {
        bestpriceimage:`${icon3}`,
        priceheading:"Free Delivery",
        pricepara:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        pricebutton:"Read More"
    },
    {
        bestpriceimage:`${icon4}`,
        priceheading:"Easy Returns",
        pricepara:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        pricebutton:"Read More"
    },
    {
        bestpriceimage:`${icon5}`,
        priceheading:"100% Satisfaction",
        pricepara:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        pricebutton:"Read More"
    },
    {
        bestpriceimage:`${icon6}`,
        priceheading:"Great Daily Deal",
        pricepara:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        pricebutton:"Read More"
    }
    
]

let PerformanceData=[
    {
        performanceimgg:`${perimage}`,
        heading1:"Our Performance",
        heading2:"Your Partner for e-commerce grocery solution",
        performpara1:"Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
        performpara2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    }
]

 let OurhistoryData=[
     {
        historyhead:"Who we are",
        historypara:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
     },
     {
        historyhead:"Our history",
        historypara:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
     },
     {
        historyhead:"Our mission",
        historypara:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
     },
     
 ]

 let GirlimageData=[
     {
        girlimg:`${girlistimg}`,
        positionhead:"H. Merinda",
        positionhead2:"CEO & Co-Founder"

     },
     {
        girlimg:`${girl2ndimg}`,
        positionhead:"Dilan Specter",
        positionhead2:"Head Engineer"
     }
 ]

 let FuterData=[
     {
        contentheading:"Company",
        content1:"About Us",
        content2:"Delievry information",
        content3:"privacy policy",
        content4:"terms & conditions",
        content5:"contact us",
        content6:"Help center",
        content7:"Carrers",
     },
     {
        contentheading:"Account",
        content1:"sign in",
        content2:"view cart",
        content3:"my whislist",
        content4:"track my order",
        content5:"help ticket",
        content6:"shipping detail",
        content7:"product details",
     },
     {
        contentheading:"Corporate",
        content1:"Become a vendor",
        content2:"Farmhouse",
        content3:"Farmer",
        content4:"Farm conditions",
        content5:"farm carreer",
        content6:"our supliers",
        content7:"our promotions",
     }
     ,
     {
        contentheading:"Popular",
        content1:"Milkshake",
        content2:"Butter & marginixder",
        content3:"Eggs subtricter",
        content4:"Mrmalades",
        content5:"chees",
        content6:"buuterscotch",
        content7:"Tea & coffee",
     }
 ]
 
 let FoodCategoryData=[
     {
        foodicon:`${categoryicon1}`,
        foodname:"Milk & Diaries",
        foodcount:"0"
     }
     ,
     {
        foodicon:`${categoryicon2}`,
        foodname:"Clothing",
        foodcount:"0"
     },
     {
        foodicon:`${categoryicon3}`,
        foodname:"Pet food",
        foodcount:"0"
     },
     {
        foodicon:`${categoryicon4}`,
        foodname:"Baking material",
        foodcount:"0"
     },
     {
        foodicon:`${categoryicon5}`,
        foodname:"Vegetable & fruits",
        foodcount:"0"
     }
 ]
 
 let AllitemData=[
     {
      id: 1,
        itemimage:`${itemimage1}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
      id: 1,
        itemimage:`${itemimage2}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
      id: 1,
        itemimage:`${itemimage3}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
      id: 1,
        itemimage:`${itemimage4}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
      id: 1,
        itemimage:`${itemimage5}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage6}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage7}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage8}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage4}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage2}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage2}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage4}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage8}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage7}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage1}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage2}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage3}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage2}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage5}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     {
        itemimage:`${itemimage4}`,
        snackname:"snack",
        itemname:"seed of change organic quites",
        actualprice:"$40.00",
        pastprice:"$50.00"
     },
     
 ]

 let DealData=[
     {
        dealimage:`${dealimage1}`,
        countdown1:"1060",
        countdown2:"7",
        countdown3:"20",
        countdown4:"34",
        time1:"Days",
        time2:"Hours",
        time3:"Mins",
        time4:"sec",
        itemname:"Seed of change organic ,quinao brown",
        actualprice:"$50",
        pastprice:"$80"
     },
     {
        dealimage:`${dealimage2}`,
        countdown1:"1060",
        countdown2:"7",
        countdown3:"20",
        countdown4:"34",
        time1:"Days",
        time2:"Hours",
        time3:"Mins",
        time4:"sec",
        itemname:"Seed of change organic ,quinao brown",
        actualprice:"$50",
        pastprice:"$80"
     },
     {
        dealimage:`${dealimage3}`,
        countdown1:"1060",
        countdown2:"7",
        countdown3:"20",
        countdown4:"34",
        time1:"Days",
        time2:"Hours",
        time3:"Mins",
        time4:"sec",
        itemname:"Seed of change organic ,quinao brown",
        actualprice:"$50",
        pastprice:"$80"
     },
     {
        dealimage:`${dealimage4}`,
        countdown1:"1060",
        countdown2:"7",
        countdown3:"20",
        countdown4:"34",
        time1:"Days",
        time2:"Hours",
        time3:"Mins",
        time4:"sec",
        itemname:"Seed of change organic ,quinao brown",
        actualprice:"$50",
        pastprice:"$80"
     },
    
 ]
 let NewproductData=[
     {
        newproductimg:`${newimage}`,
        newproducthead1:"chen sweater",
        productrupee:"$50",
     },
     {
        newproductimg:`${newimage}`,
        newproducthead1:"chen sweater",
        productrupee:"$50",
     },
     {
        newproductimg:`${newimage}`,
        newproducthead1:"chen sweater",
        productrupee:"$50",
     }
 ]

let Homecategorydata=[
    {
        categoryimg:`${kiwi}`,
        categoryhead:'Organic Kiwi',
        categoryhead2:'28 item',
        color1:'imgcolor'
    },
    {
        categoryimg:`${peach}`,
        categoryhead:'Peach',
        categoryhead2:'14 item',
        color1:'imgcolor2'

    },
    {
        categoryimg:`${apple}`,
        categoryhead:'Red Apple',
        categoryhead2:'54 item',
        color1:'imgcolor3'

    },
    {
        categoryimg:`${snack}`,
        categoryhead:'Snack',
        categoryhead2:'56 item',
        color1:'imgcolor4'

    },
    {
        categoryimg:`${vegetable}`,
        categoryhead:'Vegetables',
        categoryhead2:'72 item',
        color1:'imgcolor5'

    },
    {
        categoryimg:`${strawbeery}`,
        categoryhead:'Strawberry',
        categoryhead2:'36 item',
        color1:'imgcolor6'

    },
    {
        categoryimg:`${blackplum}`,
        categoryhead:'Black Plum',
        categoryhead2:'123 item',
        color1:'imgcolor7'

    },
    {
        categoryimg:`${custard}`,
        categoryhead:'Custard apple',
        categoryhead2:'34 item',
        color1:'imgcolor8'

    },
    {
        categoryimg:`${coffee}`,
        categoryhead:'coffe & Tea',
        categoryhead2:'89 item',
        color1:'imgcolor9'

    },
    {
        categoryimg:`${headphn}`,
        categoryhead:'Headphone',
        categoryhead2:'87 item',
        color1:'imgcolor10'

    },
] 

let PopularData=[
    {
       id:1,
        itemimage:`${itemimage1}`,
        snackname:"snack",
        itemname:"Bandy blandy",
        price:80,
        pastprice:"$50",
        servicetax:5
     },
     {
      id:2,
        itemimage:`${itemimage2}`,
        snackname:"snack",
        itemname:"French fries",
        price:70,
        pastprice:"$150",
        servicetax:15
     },
     {
      id:3,
        itemimage:`${itemimage3}`,
        snackname:"snack",
        itemname:"Sweet patato & Nut cracker",
        price:90,
        pastprice:"$50",
        servicetax:10
     },
     {
      id:4,
        itemimage:`${itemimage4}`,
        snackname:"snack",
        itemname:"Peanuts cracker",
        price:80,
        pastprice:"$80",
        servicetax:12
     },
     {
      id:5,
        itemimage:`${itemimage5}`,
        snackname:"snack",
        itemname:"Uliaa juice",
        price:80,
        pastprice:"$90",
        servicetax:16
     },
     {
      id:6,
        itemimage:`${itemimage6}`,
        snackname:"snack",
        itemname:"Sweets pista",
        price:80,
        pastprice:"$30",
        servicetax:18
     },
     {
      id:7,
        itemimage:`${itemimage7}`,
        snackname:"Skin care",
        itemname:"Yuija nuican",
        price:80,
        pastprice:"$120",
        servicetax:20
     },
     {
      id:8,
        itemimage:`${itemimage8}`,
        snackname:"snack",
        itemname:"Green tea with snacks",
        price:80,
        pastprice:"$250",
        servicetax:22
     },
   //   {
   //      id:"9",
   //        itemimage:`${itemimage8}`,
   //        snackname:"snack",
   //        itemname:"Green tea with snacks",
   //        actualprice:1080,
   //        pastprice:"$250"
   //     },
   //     {
   //      id:"8",
   //        itemimage:`${itemimage8}`,
   //        snackname:"snack",
   //        itemname:"Snack with greeen tea",
   //        actualprice:800,
   //        pastprice:"$250"
   //     },
]

let BannerData=[
    {
        bannerimg:`${banner1}`,
        bannertexthead:"Everyday Fresh & Clean with Our Products"
    },
    {
        bannerimg:`${banner2}`,
        bannertexthead:"Make your breakfast Healthy & easy"
    },
    {
        bannerimg:`${banner3}`,
        bannertexthead:"The best organic products Online"
    }
]

let Bringnature2Data=[
    
        {
         id: 1,
            itemimage:`${itemimage1}`,
            snackname:"snack",
            itemname:"seed of change organic quites",
            actualprice:"$40.00",
            pastprice:"$50.00"
         },
         {
            id: 2,
            itemimage:`${itemimage2}`,
            snackname:"snack",
            itemname:"seed of change organic quites",
            actualprice:"$40.00",
            pastprice:"$50.00"
         },
         {
            id: 3,
            itemimage:`${itemimage3}`,
            snackname:"snack",
            itemname:"seed of change organic quites",
            actualprice:"$40.00",
            pastprice:"$50.00"
         },
         {
            id: 4,
            itemimage:`${itemimage4}`,
            snackname:"snack",
            itemname:"seed of change organic quites",
            actualprice:"$40.00",
            pastprice:"$50.00"
         },
    
]
export{Homecategorydata}
export{LogoData,CartData,MenuData,HelplineData,BestpriceData,PerformanceData,OurhistoryData,GirlimageData,FuterData,FoodCategoryData
,AllitemData,DealData,NewproductData,PopularData,BannerData,Bringnature2Data}