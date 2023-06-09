import React from "react";
import Banner from "../images/edx course.jpg";
import Banner2 from "../images/news2.jpg";
import Banner3 from "../images/news3.jpg";
import { useNavigate } from 'react-router-dom';


const New= () =>{
    const navigate =useNavigate();
    
    
    return(
        
        <section  id="New" className="w-full mb-[50px] pt-28 xl:px-28 md:px-10 max-sm:px-12 pb-10 ">
            <h1 className="text-center text-4xl font-robo font-bold mb-8 text-[#00a6a6] uppercase">News & Events</h1>
            <div className="w-full h-auto grid  gap-10 md:gap-12 xl:gap-28  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

            <div data-aos="zoom-in-up" className="relative card1 shadow-lg border  rounded-lg  max-md:h-[420px] md:h-[450px] lg:h-[450px]  xl:h-[450px] 2xl:h-[500px] sm:w-1/2 md:w-full lg:w-full xl:w-full  sm:mx-auto ">
                <img className="h-1/2 w-full rounded-t-lg border-t-0" src={Banner} />
                <div className="text-center">
                <h1 className="text-lg max-md:text-sm font-semibold px-3">ကွန်ပျူတာတက္ကသိုလ် (မအူပင်)ရှိ CDM ဆရာ၊ ဆရာမများနှင့် CDM ကျောင်းသား၊ ကျောင်းသူများသို့ အသိပေးအကြောင်းကြားခြင်း </h1>
                
                
                </div>
                <h2 className=" pr-2 text-lg font-medium absolute right-0 bottom-[70px]">၁၃.၃.၂၀၂၃</h2>
                <button onClick={() => navigate("/newdetail/1")} className="absolute bottom-0 w-full  bg-[#00a6a6] py-4 px-14 border-t-2 text-white  border-solid border-white font-medium rounded-b-lg ">More Detail</button>
                


            </div>
            <div data-aos="zoom-in-up" className="relative card2 shadow-lg border  rounded-lg  max-md:h-[420px] md:h-[450px] lg:h-[450px]  xl:h-[450px] 2xl:h-[500px] sm:w-1/2 md:w-full lg:w-full xl:w-full  sm:mx-auto ">
                <img className="h-1/2 w-full rounded-t-lg border-t-0 " src={Banner2} />
                <div className="text-center">
                <h1 className="text-lg max-md:text-sm font-semibold px-2">CDM ကျောင်းသား၊ ကျောင်းသူများအား ကျေးဇူးတင်လွှာ</h1>
               

                
                </div>
                <h2 className=" pr-2 text-lg font-medium absolute right-0 bottom-[70px]">၂၉.၃.၂၀၂၃</h2>
                <button onClick={() => navigate("/newdetail/2")} className="absolute bottom-0 w-full bg-[#00a6a6] py-4 px-14 border-t-2 text-white  border-solid border-white font-medium rounded-b-lg">More Detail</button>
                


            </div>
            <div data-aos="zoom-in-up" className="relative card3 shadow-lg border  rounded-lg  max-md:h-[420px] md:h-[450px] lg:h-[450px]  xl:h-[450px] 2xl:h-[500px] sm:w-1/2 md:w-full lg:w-full xl:w-full  sm:mx-auto ">
                <img className="h-1/2 w-full rounded-t-lg border-t-0 " src={Banner3} />
                <div className="text-center">
                <h1 className="text-lg max-md:text-sm font-semibold px-2">မြန်မာနှစ်ဆန်း (၁)ရက်နေ့၊ နှစ်သစ်ဆုတောင်း</h1>
                
        
                
                </div>
                <h2 className=" pr-2 text-lg font-medium absolute right-0 bottom-[70px]">၁၇.၄.၂၀၂၃</h2>

                <button onClick={() => navigate("/newdetail/3")} className="absolute bottom-0 w-full  bg-[#00a6a6] py-4 px-14 border-t-2 text-white  border-solid border-white font-medium rounded-b-lg">More Detail</button>
                


            </div>
            {/* <div className="relative card2 shadow-xl border-2 border-solid rounded-[10px]  h-[400px] sm:w-1/2 md:w-full lg:w-full xl:w-full  sm:mx-auto ">
                <img className="h-1/2 w-full rounded-t-3xl border-t-0 " src={Banner} />
                <div className="text-center">
                <h1 className="text-lg font-bold">Registration Process Timeline</h1>
                <p>dflkjpfk;lkoaefg</p>
                
                </div>
                <button onClick={() => navigate("/newdetail/2")} className="absolute bottom-0 w-full max-md:mt-[90px] md:mt-[87px] mt-[62px] bg-[#00a6a6] py-4 px-14 border-t-2 text-white  border-solid border-white font-medium rounded-b-[10px]">More Detail</button>
                


            </div>
            <div className="relative card3 shadow-xl border-2 border-solid rounded-[10px]  h-[400px] sm:w-1/2 md:w-full lg:w-full xl:w-full  sm:mx-auto ">
                <img className="h-1/2 w-full rounded-t-3xl border-t-0 " src={Banner} />
                <div className="text-center">
                <h1 className="text-lg font-bold">Registration Process Timeline</h1>
                <p>dflkjpfk;lkoaefg</p>
                
                </div>
                <button onClick={() => navigate("/newdetail/3")} className="absolute bottom-0 w-full max-md:mt-[90px] md:mt-[87px] mt-[62px] bg-[#00a6a6] py-4 px-14 border-t-2 text-white  border-solid border-white font-medium rounded-b-[10px]">More Detail</button>
                


            </div> */}
            
            
            
            </div>   
              
        </section>
        

    )
}
export default New;






            // <h1  className=" w-full text-[36px] text-[#5415b9] font-bold text-center  mb-8">NEWS & EVENTS</h1>
            // <div className="parentContainer w-full h-[1283px] ">
            //     <div className="container  w-full h-[1243px] flex mx-auto">
            //     <div className="w-2/3 box-border h-full  flex flex-wrap justify-between p-5">
            //         <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative ">
            //             <img className=" rounded-t-xl" src={Banner} />
            //             <h1 className="font-bold text-[20px] p-[16px]">Registration Process Timeline</h1>
            //             <p className="p-[16px]">Registration ပြုလုပ်ထားသော ကျောင်းသား၊ကျောင်းသူများအနေဖြင့် ၂၀၂၃ ခုနှစ်၊ ဇန်နဝါရီလ(၁၁)ရက်နေ့မှစ၍ သက်ဆိုင်ရာစာသင်နှစ်များတွင် စတင်လေ့လာနိုင်မည်ဖြစ်သည်။</p>
            //             <div className="flex justify-end absolute bottom-[16px] right-[16px]">
            //             <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
            //             </div>
            //         </div>
            //         <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative">
            //             <img className="h-[250px] rounded-t-xl  " src={Banner2} />
            //             <h1 className="font-bold text-[20px] p-[16px]">Formal Education အတွက် registration ပြုလုပ်နိုင်ပြီ</h1>
            //             <p className="p-[16px]">ဆေးတက္ကသိုလ် - မကွေး ယာယီတက္ကသိုလ်ကောင်စီသည် ကြားကာလ ပုံမှန်အတန်းတင်ပညာရေးကို (၂၀၂၃)ခုနှစ်၊ ဇန်နဝါရီလတွင်စ‌တင်တော့မည်ဖြစ်သည်။ ပုံမှန်အတန်းတင်ပညာရေးတွင် ပါဝင်သင်ကြားလိုသော ကျောင်းသား၊ကျောင်းသူများသည်</p>
            //             <div className="flex justify-end absolute bottom-[16px] right-[16px]">
            //             <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
            //             </div>
            //         </div>
            //         <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative">
            //             <img className=" rounded-t-xl" src={Banner} />
            //             <h1 className="font-bold text-[20px] p-[16px]">Registration Process Timeline</h1>
            //             <p className="p-[16px]">Registration ပြုလုပ်ထားသော ကျောင်းသား၊ကျောင်းသူများအနေဖြင့် ၂၀၂၃ ခုနှစ်၊ ဇန်နဝါရီလ(၁၁)ရက်နေ့မှစ၍ သက်ဆိုင်ရာစာသင်နှစ်များတွင် စတင်လေ့လာနိုင်မည်ဖြစ်သည်။</p>
            //             <div className="flex justify-end absolute bottom-[16px] right-[16px]">
            //             <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
            //             </div>
            //         </div>
            //         <div className="w-[47%] border border-slate-400 shadow-[0_5px_5px_5px] shadow-slate-200 mb-6 rounded-xl flex flex-col bg-white relative">
            //             <img className="h-[250px] rounded-t-xl  " src={Banner2} />
            //             <h1 className="font-bold text-[20px] p-[16px]">Formal Education အတွက် registration ပြုလုပ်နိုင်ပြီ</h1>
            //             <p className="p-[16px]">ဆေးတက္ကသိုလ် - မကွေး ယာယီတက္ကသိုလ်ကောင်စီသည် ကြားကာလ ပုံမှန်အတန်းတင်ပညာရေးကို (၂၀၂၃)ခုနှစ်၊ ဇန်နဝါရီလတွင်စ‌တင်တော့မည်ဖြစ်သည်။ ပုံမှန်အတန်းတင်ပညာရေးတွင် ပါဝင်သင်ကြားလိုသော ကျောင်းသား၊ကျောင်းသူများသည်</p>
            //             <div className="flex justify-end absolute bottom-[16px] right-[16px]">
            //             <button className="bg-violet-600 w-[125px] h-[44px] px-4 font-bold text-white rounded-xl ">More Detail</button>
            //             </div>
            //         </div>
                
                
            //     </div>
            //     <div className="w-1/3 box-border h-full pl-[40px] pr-[16px]">
            //         <h1 className="text-2xl bg-slate-200 mt-[40px] p-[16px] border-b-2 border-violet-500 text-violet-700 font-medium">POPULAR NEWS</h1>
            //         <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700">Formal Education အတွက် registration ပြုလုပ်နိုင်ပြီ</p>
            //         <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700"> Registration Process Timeline</p>
            //         <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700"> Academic Credit System & Framework</p>
            //         <p className="p-[16px] border-b-[1px] border-violet-500 text-violet-700"> ဆေးတက္ကသိုလ် - မကွေး၊ ယာယီတက္ကသိုလ်ကောင်စီနှင့် ကျောင်းသား၊ကျောင်းသူများတွေဆုံဆွေးနွေးခဲ့</p>
            //     </div>
            // </div>