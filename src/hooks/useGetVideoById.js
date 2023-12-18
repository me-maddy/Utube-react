import { useSelector } from "react-redux";

const useGetVideoById = (id) => {
  const popularVideos = useSelector((store) => store?.video?.popularVideos);
  const video = popularVideos.filter((video) => video?.id === id)[0];

  if (!video) return null;

  const { snippet, statistics } = video;
  return { snippet, statistics };
};

export default useGetVideoById;
