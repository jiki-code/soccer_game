"use client";
import React from "react";

const TagInfo: React.FC<{
  userName: string;
  className?: string;
  onClick?: () => void;
}> = ({ userName, className = "", onClick }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
    setIsShow(!isShow);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const tagInfo = document.getElementById("tag-info");
      if (tagInfo && !tagInfo.contains(event.target as Node)) {
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="tag-info" className="relative flex items-center gap-1" onClick={handleOnClick}>
      <div
        className={`w-7 h-7 text-center py-1 font-semibold text-[--var(--color-input)] rounded-full ${className}`}
        onClick={handleOnClick}
      >
        {userName[0].toUpperCase()}
      </div>

        <span className=" text-md font-medium pt-2 text-[--var(--color-input)]">
          {userName}
        </span>
        {isShow && (
          <ul className="absolute left-0 top-9 bg-gray-500 shadow-xs border-2 border-[--var(--border)] rounded-lg shadow-lg w-40 z-50">
            <li className="px-2 py-1 hover:bg-gray-400 text-shadow-xs text-[--var(--color-input)] cursor-pointer">
              Profile
            </li>
            <li className="px-2 py-1 hover:bg-gray-400 text-shadow-xs text-[--var(--color-input)] cursor-pointer">
              Setting
            </li>
            <li className="px-2 py-1 hover:bg-gray-400 text-shadow-xs text-[--var(--color-input)] cursor-pointer">
              Logout
            </li>
          </ul>
        )}
    </div>
  );
};
export { TagInfo };
