import { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessageDetail, clearMessageDetail } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [showLiveChat, setShowLiveChat] = useState(true);
  const [chat, setChat] = useState("");
  const messageDetails = useSelector((store) => store.chat.messagesDetail);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      dispatch(
        addMessageDetail({
          name: generateRandomName(),
          message: makeRandomMessage(5),
        })
      );
    }, 2000);
    return () => {
      clearInterval(timeInterval);
      dispatch(clearMessageDetail());
    };
  }, []);

  return (
    <div className="w-full bg-slate-100 rounded-lg mt-4 mb-4 relative">
      {showLiveChat && (
        <>
          <h3 className="shadow-md border-b border-slate-300 border-solid p-2 w-full align-middle font-medium text-base">
            <span className="w-2 mr-1 inline-block rounded-full h-2 bg-red-600"></span>{" "}
            Top live comments
          </h3>
          <div className="w-full relative h-[402px]">
            <div className="flex p-2 pt-2 lg:pt-3 overflow-y-scroll absolute bottom-0 w-full  flex-col-reverse h-[400px]">
              {messageDetails.map((detail, index) => (
                <LiveChatMessage
                  key={index}
                  name={detail.name}
                  message={detail.message}
                />
              ))}
            </div>
          </div>

          <form
            className="flex border-t-2 border-b justify-center  border-solid border-gray-200 py-2 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (chat !== "") {
                dispatch(
                  addMessageDetail({
                    name: generateRandomName(),
                    message: chat,
                  })
                );
                setChat("");
              }
            }}
          >
            <input
              type="text"
              className=" rounded-full px-3 w-3/4 py-1.5 outline-none"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
            <button className="lg:ml-3 ml-1.5 px-2 py-1.5 hover:bg-white transition-all duration-150 ease-linear  rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png"
                alt="send-icon"
                className="h-6"
              />
            </button>
          </form>
        </>
      )}
      <div className="p-1.5 sm:text-lg text-base">
        <p
          className="w-full rounded-full py-1 sm:py-1.5 cursor-pointer text-center hover:bg-white transition-all duration-200 ease-linear"
          onClick={() => setShowLiveChat(!showLiveChat)}
        >
          {showLiveChat ? "Hide chat" : "Show chat"}
        </p>
      </div>
    </div>
  );
};

export default LiveChat;
