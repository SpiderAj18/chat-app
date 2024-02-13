import { Conversation } from "../models/conversation.models.js";
import { Message } from "../models/message.models.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    console.log(req.body);
    console.log(receiverId);
    console.log(senderId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //  await conversation.save(); we are saving the conversation in the database
    //  await newMessage.save();  we are saveing the messages in the database
    await Promise.all([conversation.save(), newMessage.save()]); //this line do the save which is written in above
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error, "error while sending messages");
    res
      .status(500)
      .json({ error: "Internal server error in sending messages" });
  }
};

const receiveMessage = async (req, res) => {
  try {
   const {id: userToChatId} = req.params;
   const senderId = req.user._id;

   const conversation = await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]},
   }).populate("messages");

   res.status(200).json(conversation.messages)

  } catch (error) {
    console.log(error, "Error while receving messages");
    res
      .status(500)
      .json({ error: "Internal server error in receiving messages" });
  }
};

export { sendMessage, receiveMessage };
