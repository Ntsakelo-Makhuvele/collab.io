import Navbar from "../../components/Navbar";
import cog from '../../assets/cog.svg'
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ticket from '../../assets/ticket.svg'
import chairs from '../../assets/chairs.jpg'
import event from '../../assets/event.jpg'
import { Link } from "react-router-dom";

const Home = () => {
 
    return (
        <div className=" bg-slate-900">
           <div className="h-40"> 
           <Navbar />
           </div>
           <div>
           <p className="text-center text-white text-4xl/12">EXPLORE AND BOOK <br /> UPCOMING EVENTS ONLINE</p>
           </div>
           <div className="lg:flex gap-5 w-[80%] m-auto mt-10 pb-30">
           <div className="lg:flex-5 h-70 bg-slate-800 rounded-[30px] mb-10">
               <div className="flex ">
                <div className="flex-6 mb-10">
                <p className="text-lime-300 p-5 text-xl">Sponsors</p>
                </div>
                  <div className="flex-6 h-70">
                <img src={cog} className="h-[100%] w-[100%] block pr-10" />
                </div>
               </div>
           </div>
           <div className="lg:flex-7 h-70 bg-slate-800 rounded-[30px]">
               <p className="p-5 text-gray-300">Welcome to collab.io, the ultimate destination for discovering and booking upcoming events</p>
               <div className="flex gap-2 lg:w-[60%] p-5 w-[100%]">
                 <p className="flex-4 text-white text-2xl border-r border-gray-400 mr-3">23 <br/><span className="text-gray-400 text-lg">Hours</span></p>
                 <p className="flex-4 text-white text-2xl border-r border-gray-400 mr-3">15 <br/><span className="text-gray-400 text-lg">Minutes</span></p>
                 <p className="flex-4 text-white text-2xl">10 <br/><span className="text-gray-400 text-lg">Seconds</span></p>
               </div>
               <div>
                 <button className="p-3 bg-lime-300 ml-5 lg:w-[80%] w-[90%]  font-semibold rounded-[10px]">Book Your Seat For Collab.io </button><p className="lg:visible invisible grid items-center bg-violet-500 inline border p-4 rounded-[50%]"><ArrowUpRightIcon className="inline size-6 text-white"/></p>
               </div>
               
           </div>
               
           </div>
           <div className="lg:flex gap-5 w-[80%] m-auto">
              <div className="lg:flex-6"> 
               <h3 className="text-4xl text-white font-semibold">DECIDE TO JOIN AN EVENT</h3>
               <p className="text-gray-300 mt-10 text-lg">Once you have discovered an event that you are interested in, you can view the event details including date, time, venue, lineup, agenda, and speakers</p>
                <Link to="/" className="block mt-10"><button className="bg-violet-500 text-white font-bold p-3 rounded-[30px] cursor-pointer">GET TICKET <ArrowUpRightIcon className="inline size-6 text-white"/></button></Link>
              </div>
               <div className="lg:flex-6"> 
                   <img src={ticket} />
              </div>
           </div>
           <div className="w-[80%] m-auto">
             <h3 className="text-4xl text-white font-semibold mt-30">DISCOVER UPCOMING EVENTS</h3>
             <div className="lg:flex gap-5 mt-10 pb-30">
                <div className="lg:flex-6">
                    <div className="bg-violet-500 h-55 rounded-[30px] mb-7">
                       <h3 className="p-5 text-2xl font-semibold text-white">EXPLORE THE EVENT</h3>
                       <p className="text-gray-300 p-5 pt-0 text-lg">Our platform is designed to simplify the process of finding and booking events that suite your choice and preferences. You can browse through a range of events and filter by date, time, and location</p>
                    </div>
                    <div className="bg-lime-300 h-20 rounded-[30px] grid items-center mb-7">
                       <p className="p-5 text-2xl font-semibold">EXPLORE THE EVENTS</p>
                    </div>
                 </div> 
                 <div className="lg:flex-6">
                     <img src={chairs}  className="rounded-[30px]"/>
                    </div>      
             </div>
             <div className="lg:flex gap-5 pb-30">
                <div className="lg:flex-9 h-70 rounded-[30px] bg-[url(assets/event_bg.jpg)] bg-center bg-cover mb-7">
                
                </div>
                <div className="lg:flex-3 h-70 rounded-[30px] bg-lime-300 relative">
                   <p className="p-5 font-semibold">We have simplified the process of booking and scheduling events. We made it so seamless so you can enjoy the experience of booking or creating an event</p>
                   <Link to="/events" className="absolute bottom-0 left-0 right-0 mb-5"><button className="bg-violet-500 rounded-[30px] p-3 w-[90%] block m-auto text-white font-semibold">EXPLORE<ArrowUpRightIcon className="inline size-6 text-white"/></button></Link>
                </div>
             </div> 
             <div className="pb-30">
             <div className="h-[100%] block bg-slate-600 rounded-[30px] bg-[url(assets/event.jpg)] bg-cover bg-center bg-blend-multiply">
                <div className="lg:flex gap-5">
                  <div className="lg:flex-6">
                     <h3 className="p-10 text-4xl/12 text-white font-semibold">GET YOUR<br/> FIRST TICKET</h3> 
                      <Link to="/events" className=" mb-5"><button className="bg-violet-500 rounded-[30px] p-3 w-[150px] block ml-10 text-white font-semibold">GET TICKET<ArrowUpRightIcon className="inline size-6 text-white"/></button></Link>         
                  </div>
                
                  <div className="lg:flex-6">
                    <p className="p-10 font-semibold text-white">We have simplified the process of booking and scheduling events. We made it so seamless so you can enjoy the experience of booking or creating an event</p>
                    <img src={cog} className="h-[50%] w-[50%] block pr-10 m-auto" />
                  </div>
                </div>
             </div> 
             </div>
           </div>
        </div>
    )
}

export default Home;