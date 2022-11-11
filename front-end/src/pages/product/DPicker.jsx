import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./product.css"
import "react-datepicker/dist/react-datepicker.css";
const DPicker = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <>
      <DatePicker className="date"
        selected={selectDate}
        onChange={(date) => setSelectDate(date)}
        dateFormat='dd/MMM/yyyy'
        minDate={new Date()}

      />
    </>
  );
};

export default DPicker;
