import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles (you'll override them)
import { CalendarDateRangeIcon } from '@heroicons/react/24/outline';

// You can adjust the Tailwind class names to match the Flowbite theme exactly

const DateRangePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to render the custom input field with the Flowbite styling
  const CustomInput = ({ value, onClick }:any) => (
      <div className="relative mb-6 border w-full">
        <div className="absolute inset-y-0  start-0 flex items-center ps-3.5 pointer-events-none">
          <CalendarDateRangeIcon
            className="w-4 h-4 text-gray-300 dark:text-gray-400 size-6"
          />
        </div>
        <input
          type="text"
          className="bg-slate-900 border border-gray-300 text-white text-sm rounded-[30px] 
                     focus:ring-blue-500 placeholder:text-white focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Select date"
            value={value} // react-datepicker handles formatting/displaying the date string here
      onClick={onClick}
      readOnly 
        />
      </div>
    
  );

  return (    
      <DatePicker
        selected={selectedDate}
        onChange={(date:any) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy" // Example date format
      />    
  );
};

export default DateRangePicker;