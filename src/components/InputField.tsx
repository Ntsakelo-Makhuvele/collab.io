import { MapPinIcon,WalletIcon,ClockIcon,UsersIcon } from "@heroicons/react/24/outline"; 

interface Input{
    label: string,
    inputHandler: Function,
}

export default function InputField(data:Input) {
  return (
    <div>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
         {data.label === "Location" && <MapPinIcon
            className="w-4 h-4 text-gray-300 dark:text-gray-400 size-6"
          />}
          {data.label === "Budget" && <WalletIcon
            className="w-4 h-4 text-gray-300 dark:text-gray-400 size-6"
          />}
          {data.label === "Duration" && <ClockIcon
            className="w-4 h-4 text-gray-300 dark:text-gray-400 size-6"
          />}
         {data.label === "Group Size" && <UsersIcon
            className="w-4 h-4 text-gray-300 dark:text-gray-400 size-6"
          />}
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-slate-900 border border-gray-300 text-white text-sm rounded-[30px] 
                     focus:ring-blue-500 placeholder:text-white focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder={data.label}
        />
      </div>
    </div>
  );
}
