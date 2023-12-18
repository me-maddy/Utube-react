import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";

const useCloseMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
};

export default useCloseMenu;
