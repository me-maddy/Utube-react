import { useEffect } from "react";
import { Youtube_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utils/videoSlice";

const usePopularVideos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    dispatch(addPopularVideos(json?.items));
  };
};

export default usePopularVideos;
