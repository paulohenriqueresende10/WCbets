import React from "react";

const Button = ({ type, form, value, children } : any) => {
  return (
    <div>
      <button className="button" type={type} form={form} value={value}>
        {children}
      </button>
    </div>
  );
};

export default Button;
