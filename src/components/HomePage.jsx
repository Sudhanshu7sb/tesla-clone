import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import data from "./carInfo";
function HomePage() {
  
return(
    <>
    <Header />
    {data.map((singleCarInfo,index) => <Hero key={singleCarInfo.id} singleCarInfo={singleCarInfo} index={index}/>)}
    
<Footer />
    </>
)
    

}

export default HomePage;