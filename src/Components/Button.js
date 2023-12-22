const Button = ({ name }) => {
  return (
    <div>
      <button className="py-1.5  px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Button;
