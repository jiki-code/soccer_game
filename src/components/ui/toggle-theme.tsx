import { Sun, Moon } from "lucide-react";
import clsx from "clsx";
type ThemeToggleProp =  {
    changeBackGround: () => void;
    theme: string
}
const ThemeToggle = ({changeBackGround, theme} : ThemeToggleProp) => {
  

  return (
    <div
      onClick={changeBackGround}
      className={clsx(
        "w-[79px] h-[29px] flex items-center mx-3 rounded-full cursor-pointer border border-yellow-500",
        theme === "light"
          ? "bg-gray-100"
          : "bg-gradient-to-r from-[#000] to-[#1c1c1c]"
      )}
    >
      <div
        className={clsx(
          "w-[29px] h-[25px] flex items-center justify-center rounded-full border-2 border-yellow-600 bg-[#d4af37] text-black transition-all duration-300",
          theme === "light" ? "translate-x-0" : "translate-x-[45px]"
        )}
      >
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </div>
    </div>
  );
};

export {ThemeToggle};
