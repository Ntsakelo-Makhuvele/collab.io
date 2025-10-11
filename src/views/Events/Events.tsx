import Navbar from "../../components/Navbar";
import { useState } from "react";
import { AdjustmentsHorizontalIcon,
         CalendarDateRangeIcon,UserIcon,
         ClockIcon,MapPinIcon,
         MagnifyingGlassIcon
        } from "@heroicons/react/24/outline";
import image from '../../assets/event_bg.jpg' 
import Dropdown from "../../components/Dropdown";
import PrimaryButton from "../../components/PrimaryButton";
import { MockEvents, type EventsData } from "../../utils/MockData";
import InputField from "../../components/InputField";
import DateRangePicker from "../../components/DateRangePicker";
import ModalDialog from "../../components/ModalDialog";

 
 
const Events = () => {
    const [events,setEvents] = useState<EventsData[]>(MockEvents)
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    // const [dialogType, setDialogType] = useState<dialogType>("")
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpenDialog = () => {
      setOpenDialog(true);
    }
    const handleTabSelection = (value:string) => {
      if(value !=='all'){
        setEvents(MockEvents);
        setEvents(((prev) => {
           const current = prev.filter(event => event.category === value);
           return current;
        }))        
      }else{
        setEvents(MockEvents);
      }
    }
    
  return (
    <div className="bg-slate-900 min-h-[100vh]">
        <div className="h-30">
           <Navbar />
        </div>
        <div className="flex lg:gap-3 gap-2 w-[90%] m-auto">
           <div className="lg:flex-11 flex-8">
              <div className="w-[100%] border border-gray-500 rounded-[30px] h-10">
                   <div className="flex items-center bg-slate-900 w-[100%] h-[100%] rounded-[30px] pl-3">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"><MagnifyingGlassIcon className="size-6 text-white" /></div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Search event"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-300 placeholder:text-gray-300 focus:outline-none sm:text-sm/6"
          />
          </div>
              </div>
           </div>
            <div className="lg:flex-1 flex-2">
              <button className="w-[100%] border border-gray-500 rounded-[30px] h-10 grid items-center cursor-pointer" onClick={() => setIsOpen(true)}>
                 <AdjustmentsHorizontalIcon className="size-6 text-white m-auto"/>
              </button>
           </div>
        </div>
        <div className="w-[90%] m-auto mt-10 overflow-x-auto scrollbar-hidden snap-x snap-mandatory">
  <div className="flex gap-2 lg:gap-3 min-w-max">
    <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0 snap-always snap-center bg-slate-900">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('Team Build')}>Team build</button>
    </div>
    <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0 snap-always snap-center">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('Corporate')}>Corporate</button>
    </div>
    <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0 snap-always snap-center">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('Celebration')}>Celebration</button>
    </div>
    <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0 snap-always snap-center">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('Concert')}>Concert</button>
    </div>
    <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0 snap-always snap-center">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('Networking')}>Network</button>
    </div>
    <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0snap-center snap-always">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('Technology')}>Technology</button>
    </div>
     <div className="h-10 min-w-[120px] border border-gray-500 rounded-[30px] flex-shrink-0snap-center snap-always">
      <button className="h-full w-full text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500" onClick={() => handleTabSelection('all')}>All</button>
    </div>
  </div>
</div>
        <div className="grid grid-cols-2 mt-10 w-[90%] m-auto">
          <p className="text-2xl text-white font-semibold">Team Building</p>
          <div className="flex">
           <div className="flex-1 items-right">
          <Dropdown />
           </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 w-[90%] m-auto mt-10">
{events && events.map((event:EventsData) => (
<div className="mb-5" key={event.event_name}>
<div className="max-w-sm m-auto bg-slate-900 border border-gray-500 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="grid grid-cols-2">
        <div className="p-5 pb-0">
            <p><UserIcon className="size-5 text-gray-300 inline"/><span className="pl-2 relative top-0.5 text-gray-300 text-sm">{event.crowd}</span></p>
        </div>
          <div className="p-5 pb-0">
            <p className="text-right"><ClockIcon className="size-5 text-gray-300 inline"/><span className="pl-2 relative top-0.5 text-gray-300 text-sm">{event.duration} hrs</span></p>
        </div>
    </div>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-md font-semibold tracking-tight text-white">{event.event_name}</h5>
        </a>
        <p><MapPinIcon className="size-5 text-gray-300 inline"/><span className="pl-2 relative top-0.5 text-gray-300 text-sm">{event.location}</span></p>
        <p className="pt-3"><CalendarDateRangeIcon className="size-5 text-gray-300 inline"/><span className="pl-2 relative top-0.5 text-gray-300 text-sm">{event.date}</span></p>
        <p className="pt-3"><ClockIcon className="size-5 text-gray-300 inline"/><span className="pl-2 relative top-0.5 text-gray-300 text-sm">{event.time}</span></p>
        
    </div>
    <div className="p-5 grid grid-cols-2">
        <div className="grid items-center">
            <p className="text-sm text-gray-300">From R{Number(event.ticket_price).toFixed(2)}/person</p>
        </div>
         <div>
            {/* <button className="block ml-[50%] text-gray-300 text-sm p-1 w-[70px] border border-gray-500 rounded-[30px] cursor-pointer" onClick={() => setOpenDialog(true)}>Details</button> */}
            <ModalDialog  />
        </div>

    </div>
</div>
</div>

))
}
       </div>
       <div className="text-center mt-5">
          <PrimaryButton label="Show more"/>
       </div>
       {/* <ModalDialog state={openDialog}/> */}
     <div className="text-center">
      {/* Toggle button */}

      {/* Drawer */}
      <div
        id="drawer-right-example"
        className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-slate-900 w-80 
                    dark:bg-gray-800 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Filter
        </h5>

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
                     text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center 
                     dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <InputField label="Location" inputHandler={() => {}}/>
        <InputField label="Budget" inputHandler={() => {}}/>
        <InputField label="Duration" inputHandler={() => {}}/>
        <InputField label="Group Size" inputHandler={() => {}}/> 
        <div className="w-[100%]">
         <DateRangePicker />
         </div>       
        <div className="text-center">
          <PrimaryButton label="Apply Filters"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Events;