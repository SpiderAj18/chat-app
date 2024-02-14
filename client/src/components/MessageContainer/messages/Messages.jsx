import React from "react";

const Messages = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-128.png"
              alt="avatar image"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
          Hi! what is upp ?
        </div>
         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">seen 12.52</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-128.png"
              alt="sender's image"
            />
          </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
          I'm good what's about you  ?
        </div>
        
      </div>
    </>
  );
};

export default Messages;
