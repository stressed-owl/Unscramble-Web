import React from "react";
import { ClassName } from "../../../interfaces";

interface CustomTextFieldProps extends ClassName{
  value: string;
  onChange: React.ChangeEventHandler;
}

const CustomTextField = (props: CustomTextFieldProps) => {
  const classNames = `${props.className} border-[2px] rounded-sm outline-none border-white px-4 py-5 bg-transparent text-white text-3xl`;
  return (
    <input
      className={classNames}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomTextField;
