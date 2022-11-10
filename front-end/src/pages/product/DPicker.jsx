import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const DPicker = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={selectDate}
        onChange={(date) => setSelectDate(date)}
        dateFormat='dd/MMMM/yyyy'
        minDate={new Date()}

      />
    </>
  );
};

export default DPicker;
