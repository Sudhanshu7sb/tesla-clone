import React from "react";
import Fade from 'react-reveal/Fade';
import Header from "./../Header"

function Details({ car }) {
    console.log(car);
    return (<>
        <Header />
        {car.map(singleCarInfo => (

            <section key={singleCarInfo.id} className=" w-[100%] h-[100vh]  bg-cover bg-center bg-no-repeat flex flex-col justify-between items-center" style={{ backgroundImage: `url(${singleCarInfo.image})` }} >
                <Fade bottom cascade>
                    <div className="text-center pt-[20vh]">
                        <h2 className="text-2xl font-semibold">{singleCarInfo.title}</h2>
                        {singleCarInfo.route == "solarroof" || singleCarInfo.route == "solarpanel" ? <h5>{singleCarInfo.description}</h5> : ""}



                    </div>
                </Fade>
                <div className="backdrop-blur-2x bg:opacity-50 flex w-[90%] justify-evenly items-center space-y-5 mb-20 text-white">
                    <Fade bottom cascade>
                        <div className="flex w-[100%] justify-center items-center flex-wrap">
                            <div className="flex w-[70%] justify-evenly space-x-8">
                                <div>
                                    <h3>{singleCarInfo.range} mi</h3>
                                    <h6>Range (EPA est.)</h6>
                                </div>
                                <div>
                                    <h3>{singleCarInfo.time}s </h3>
                                    <h6>0-60 mph*</h6>
                                </div>
                                <div> <h3>{singleCarInfo.topSpeed} mph</h3>
                                    <h6>Top Speed†

</h6></div>
                                <div className="hidden lg:block"> <h3>{singleCarInfo.peakPower} hp </h3>
                                    <h6>Peak Power</h6></div>
                            </div>
                            <button className=" bg-transparant border-2 border-white px-12 py-[0.5rem] rounded-full m-2 cursor-pointer text-sm">CUSTOM ORDER</button>

                        </div>
                    </Fade>


                </div>
            </section>
        ))}
    </>)
}

export default Details;