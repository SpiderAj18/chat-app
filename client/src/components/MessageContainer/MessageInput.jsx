import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const MessageInput = () => {
  return (
    <div>
      <form action="" className="px-4 my-3">
        <div className="w-full flex gap-1">
          <input
            type="text"
            placeholder="send a message"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white "
          />
          <button className=" btn btn-circle bg-sky-600 text-white">
            <SendOutlinedIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
