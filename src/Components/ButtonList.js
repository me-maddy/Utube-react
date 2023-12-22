import Button from "./Button";
import { buttonNames } from "../utils/constant";

const ButtonList = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-wrap w-full dark:text-white overflow-hidden gap-y-1.5 gap-x-1.5 sm:gap-x-3 ">
        {buttonNames.map((name) => (
          <Button key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
