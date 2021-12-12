import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
import { useState } from "react";
import "./App.css";
import { style } from "./Style";

function App() {
  //For server rendering we need uinx Time format
  //Logically DateTimePickerComponent component supported format MM/dd/yyy HH:mm a
  // formatDate('minus',90)
  const [fromDate, setFromDate] = useState(formatDate('minus',7));
  const [toDate, setToDate] = useState(formatDate());


  function formatDate(action = "plus", count = 0) {
    let theDate = new Date();
    let formattedOutput = {
      viewFormat: "",
      unixFormat: "",
      logicalFormat: "",
    };

    if (count > 0) {
      action === "plus"&&theDate.setDate(theDate.getDate() + count);
      action === "minus"&&theDate.setDate(theDate.getDate() - count)
    }

    formattedOutput.logicalFormat = theDate;
    formattedOutput.unixFormat = moment(theDate).unix();
    formattedOutput.viewFormat = moment(theDate).format("DD/MM/yyyy HH:mm A");
    return formattedOutput;
  }


  console.log("Default From",fromDate.viewFormat)
  console.log("Default To",toDate.viewFormat)

  return (
    <div className="App">
      <h1>Date time</h1>
      {/* From Input */}
      <div style={{ width: "300px", margin: "auto" }}>
        <DateTimePickerComponent
          placeholder="Choose From date"
          value={fromDate.logicalFormat}
          format="dd/MM/yyyy HH:mm a"
        ></DateTimePickerComponent>
      </div>


       {/* To Input */}
      <div style={{ width: "300px", margin: "auto" }}>
        <DateTimePickerComponent
          placeholder="Choose To date"
          value={toDate.logicalFormat}
          max={toDate.logicalFormat}
          format="dd/MM/yyyy HH:mm a"
        ></DateTimePickerComponent>
      </div>

      {/* Output */}
      {/* <div style={style.outputBox}>
        <h3>Output</h3>
        <p>From Date: {fromDate.viewFormat}</p>
        <p>To Date: {toDate.viewFormat}</p>
        <p>Total Days: </p>
      </div> */}
    </div>
  );
}

export default App;
