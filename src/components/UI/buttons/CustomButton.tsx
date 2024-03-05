import React from "react";
import { ClassName, Children } from "../../../interfaces";

interface CustomButtonProps extends ClassName, Children {
  onClick: React.MouseEventHandler;
}

const CustomButton = (props: CustomButtonProps) => {
  const classNames = `${props.className} text-white border-[1px] text-3xl font-bold px-6 py-6 rounded-sm hover:bg-white hover:text-[#222] hover:rounded-[30px] duration-300 max-w-[300px] w-full`;
  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default CustomButton;
