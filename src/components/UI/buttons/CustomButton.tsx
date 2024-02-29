import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const CustomButton = (props: CustomButtonProps) => {
  return <button className="text-white border-[1px] text-2xl font-bold px-6 py-2 rounded-sm" onClick={props.onClick}>{props.children}</button>;
};

export default CustomButton;
