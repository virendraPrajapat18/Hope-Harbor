import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cards.css'

const Cards=()=>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
    <div className="cards w-screen py-24">
    <div className="w-3/4 m-auto ">
      <div className=" ">
      <Slider {...settings}>
       
          <div className=" bg-white h-[29.125rem] mb-10  text-black card-container ">
            <div className="h-48  bg-indigo-500 flex justify-center items-center ">
              <img className="img" src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/heart-g73484eb08_1920_1200x768.jpeg?VersionId=Pmwnx_SFkDopLJlYOa_GWEnBCD9WOKwC&size=690:388'  alt="" />
            </div>

            <div className="flex flex-col justify-center items-center  px-4 pt-2">
              <p className="text-xl font-semibold hover:text-red-700">What is organ donation, and why is it important?</p>
              <p>Organ donation is the process of giving an organ or tissue to someone in need of a transplant. It is a life-saving act that can provide hope to individuals suffering from organ failure or other critical conditions. </p>
            </div>

          </div>

          <div className="bg-white h-[29.125rem] mb-10 text-black card-container">
            <div className="h-48  bg-indigo-500 flex justify-center items-center">
              <img className="img" src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/organ-donation-4301527_1920.jpg?size=690:388'  alt="" />
            </div>

            <div className="flex flex-col justify-center items-center px-4 pt-2">
              <p className="text-xl font-semibold hover:text-red-700">Who can become an organ donor?</p>
              <p>Anyone can register as an organ donor, regardless of age, gender, or medical history. At the time of death, medical professionals assess the donor’s organs and tissues to determine their suitability for transplantation.</p>
            </div>

          </div>

          <div className="bg-white h-[29.125rem] mb-10 text-black card-container ">
            <div className="h-48  bg-indigo-500 flex justify-center items-center">
              <img className="img"  src='https://madhubankidneycare.com/wp-content/uploads/2023/08/organ-donation-for-Kidney-Transplant-2048x1392.jpg'  alt="" />
            </div>

            <div className="flex flex-col justify-center items-center px-4 pt-2">
              <p className="text-xl font-semibold hover:text-red-700">What organs and tissues can be donated?</p>
              <p>A donor can provide organs such as the heart, lungs, liver, kidneys, pancreas, and intestines, which are essential for life-saving transplants. Additionally, tissues like corneas, skin, bones, heart valves, and tendons can be donated to improve lives.</p>
            </div>

          </div>

          <div className="bg-white h-[29.125rem] mb-10 text-black card-container ">
            <div className="h-48  bg-indigo-500 flex justify-center items-center">
              <img className="img"  src='https://www.rfhospital.org/media/3241/donation-organs-banner.png'  alt="" />
            </div>

            <div className="flex flex-col justify-center items-center px-4 pt-2">
              <p className="text-xl font-semibold hover:text-red-700">How does organ donation work after death?</p>
              <p>When a registered donor is declared brain-dead in a hospital, medical professionals confirm consent from the registry. The donors family is informed, and organs are macthed with recipients. The process is handled with utmost care and respect for the donor and their family. </p>
            </div>

          </div>

          <div className="bg-white h-[29.125rem] mb-10  text-black card-container ">
            <div className="h-48  bg-indigo-500 flex justify-center items-center">
              <img className="img"  src='https://www.kauveryhospital.com/wp-content/uploads/2024/07/national-organ-donation-day-tamil-nadu-leading-the-way-in-india.jpg'  alt="" />
            </div>

            <div className="flex flex-col justify-center items-center px-4 pt-2">
              <p className="text-xl font-semibold hover:text-red-700">Does organ donation cost anything to the donor or their family?</p>
              <p>No, there are no costs to the donor’s family for the organ or tissue donation process. All medical expenses related to the transplantation are covered by the recipient or their insurance.</p>
            </div>

          </div>

          <div className="bg-white h-[29.125rem] mb-10  text-black   card-container">
            <div className="h-48  bg-indigo-500 flex justify-center items-center">
              <img className="img"  src='https://i0.wp.com/nephroplus.com/wp-content/uploads/2022/12/300x300-4.jpg?w=300&ssl=1'  alt="" />
            </div>

            <div className="flex flex-col justify-center items-center px-4 pt-2">
              <p className="text-xl font-semibold hover:text-red-700">Can my family override my decision to donate my organs?</p>
              <p>In most cases, your decision to register as an organ donor is legally binding. However, it’s essential to discuss your wishes with your family to ensure they understand and support your decision. </p>
            </div>

          </div>
       
       </Slider>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cards;