import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="px-3 sm:px-6  w-full py-3 sm:py-5">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
