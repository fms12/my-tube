import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
function AutoComplete({suggestion}) {
  return (
    <div className="bg-[#373737] leading-8 w-[100%] ">
      <Link to={`/results?search_query=${suggestion}`}>
        <ul className="hover:bg-[#222222] p-2 flex cursor-default ">
          <li className=" text-white text-lg font-semi flex justify-center items-center px-3">
            <SearchOutlinedIcon className=" text-white mr-4" />
            <span>{suggestion}</span>
          </li>
        </ul>
      </Link>
    </div>
  );
}

export default AutoComplete