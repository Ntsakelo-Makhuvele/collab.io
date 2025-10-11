import { useState } from 'react';
import speaker1 from '../assets/speaker_1.jpg'
import speaker2 from '../assets/speaker_2.jpg'
import speaker3 from '../assets/speaker_3.jpg'
import { 
         CalendarDateRangeIcon,
         ClockIcon,MapPinIcon,
         BanknotesIcon
        } from "@heroicons/react/24/outline";
import PrimaryButton from './PrimaryButton';

const ModalDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  return (
    <>
      {/* Modal toggle button */}
      <button className="block ml-[50%] text-gray-300 text-sm p-1 w-[70px] border border-gray-500 rounded-[30px] cursor-pointer" onClick={showModal}>Details</button>

      {/* Main modal */}
      {isOpen && (
        <div
          id="static-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-[100vh]"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full opacity-100">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 ">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Future of AI
                </h3>
                <button
                  onClick={hideModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  This event will delve deep into the future of AI. It will cover a range of topics including sustainability of AI, security, and potential threats. This topic aims at creating awareness while covering key aspects of AI. Topics will be covered by different speakers with a vast experience in the tech ecosystem
                </p>
                   <p className='m-0'><MapPinIcon className="size-5 text-gray-500 inline"/><span className="pl-2 relative top-0.5 text-gray-500 text-sm">Cape Town</span></p>
        <p className="pt-3"><CalendarDateRangeIcon className="size-5 text-gray-500 inline"/><span className="pl-2 relative top-0.5 text-gray-500 text-sm">29 October 2025</span></p>
         <p className="m-0"><ClockIcon className="size-5 text-gray-500 inline"/><span className="pl-2 relative top-0.5 text-gray-500 text-sm">12:00 PM - 16:00 PM</span></p>
          <p className="pt-3"><BanknotesIcon className="size-5 text-gray-500 inline"/><span className="pl-2 relative top-0.5 text-gray-500 text-sm">From R399.00/Person</span></p>
                <p className='text-lg text-gray-500'>Speakers</p>
                <p>
                  <div className="flex items-center gap-4 mb-3">
                    <img className="w-10 h-10 rounded-full" src={speaker1} alt="" />
                    <div className="font-medium dark:text-white">
                      <div>Jese Leos</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">AI Research Specialist</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4 mb-3">
                    <img className="w-10 h-10 rounded-full" src={speaker2} alt="" />
                    <div className="font-medium dark:text-white">
                      <div>Mollisa Jese</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Senior Engineer</div>
                    </div>
                  </div>
                   <div className="flex items-center gap-4 mb-3">
                    <img className="w-10 h-10 rounded-full" src={speaker3} alt="" />
                    <div className="font-medium dark:text-white">
                      <div>Jene Kumar</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">AI Specialist</div>
                    </div>
                  </div>
                </p>

              </div>
              {/* Modal footer */}
              <div className="flex items-center  p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <div className='flex-1 text-center'>
               <PrimaryButton label='Book Event' type='black' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalDialog;