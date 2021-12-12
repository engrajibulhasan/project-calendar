import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./App.css";
import { style } from "./Style";

function App() {
  const dateValue = new Date("02/12/2021 10:30 AM");
  const minDate = new Date("12/02/2021 10:30 AM");
  const maxDate = new Date("12/13/2021 10:30 AM");

  return (
    <div className="App">
      <h1>Date time</h1>
      {/* Input */}
      <div style={{ width: "300px", margin: "auto" }}>
        <DateTimePickerComponent
          placeholder="Choose From date"
          value={dateValue}
        ></DateTimePickerComponent>
      </div>
      <div style={{ width: "300px", margin: "auto" }}>
        <DateTimePickerComponent
          placeholder="Choose To date"
          min={minDate}
          max={maxDate}
          format="dd/MM/yyyy HH:mm a"
        ></DateTimePickerComponent>
      </div>

      {/* Output */}
      <div style={style.outputBox}>
        <h3>Output</h3>
        <p>From Date:</p>
        <p>To Date:</p>
        <p>Total Days:</p>
      </div>
    </div>
  );
}

export default App;
