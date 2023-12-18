import Button from "./Button";
import { buttonNames } from "../utils/constant";

const ButtonList = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex overflow-hidden  gap-x-3 ">
        {buttonNames.map((name) => (
          <Button key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
