
interface ButtonData{
    label: string,
    type?: string
}

const PrimaryButton = (data:ButtonData) => {
    return (
      <>  
      {!data.type &&  <button className="h-10 w-[fit-content] pr-3 pl-3 text-white cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500 border border-gray-500">{data.label}</button>}
      {data.type==="black" &&  <button className="h-10 w-[fit-content] pr-3 pl-3 text-gray-500 cursor-pointer text-sm active:bg-violet-500 rounded-[30px] focus:bg-violet-500 border border-gray-500">{data.label}</button>}
      </>
     
    )
}

export default PrimaryButton;