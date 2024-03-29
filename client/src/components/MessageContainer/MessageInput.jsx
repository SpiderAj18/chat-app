import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const MessageInput = () => {
  return (
    <div>
      <form action="" className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="send a message"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white "
          />
          <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 ">
            <SendOutlinedIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
