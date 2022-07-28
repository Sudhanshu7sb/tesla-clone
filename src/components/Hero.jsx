import React from "react";
import Fade from 'react-reveal/Fade';


function Hero({singleCarInfo,index}) {
    // console.log(index,"index")
    return <section className=" w-[100%] h-[100vh]  bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center" style={{backgroundImage:`url(images/${singleCarInfo.image})`}} >
    <Fade bottom cascade>
        <div className="text-center pt-[20vh]">
            <h2 className="text-5xl font-semibold">{singleCarInfo.title}</h2>
        {index == 0 ? <h5>Order Online for <span className="border-b-[1px] border-b-black hover:border-b-[3px]">Touchless Delivery</span></h5> : <h5>{singleCarInfo.description}</h5>}
            

        </div>
        </Fade>
        <div className="flex flex-col justify-center items-center space-y-3 mb-10 text-white">
        <Fade bottom cascade>
        <div className="flex justify-center items-center flex-wrap">
        {singleCarInfo.title == "Accessories" ? <button className=" bg-[#3A3E42] px-12 py-[0.5rem] rounded-full m-2 cursor-pointer text-sm">Shop Now</button> : (<><button className=" bg-[#3A3E42] px-12 py-[0.5rem] rounded-full m-2 cursor-pointer text-sm">CUSTOM ORDER</button>
            <button className=" bg-[#E8E9E7] text-[#3E4146] text-sm px-12 py-[0.5rem] rounded-full m-2 cursor-pointer">EXISTING INVENTORY</button></>)}
            
        </div>
            </Fade>
        {index == 0 ? <img src="/images/down-arrow.svg" alt="down-arrow" className="w-6 h-8 animate-bounce "/> : ""}
        
        </div>
    </section>
}

export default Hero;