import React from "react";

function SidebarRow({ Icons, title }) {
  return (
    <div className="flex justify-center items-center py-1 mt-[15px] cursor-default hover:bg-[#222222] rounded-lg m-5">
      <div className="block mr-[20px] ml-3.5">
        <Icons className="text-white  cursor-pointer" />
      </div>
      <h1 className="cursor-pointer ml-3 flex-1 text-[1rem] font-normal overflow-ellipsis overflow-hidden text-white delay-[2] max-sm:hidden">
        {title}
      </h1>
    </div>
  );
}

export default SidebarRow;
