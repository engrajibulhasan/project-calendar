import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./App.css";
import { style } from "./Style";

function App() {
  const dateValue = new Date("02/12/2021 10:30 AM");

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
        <DateTimePickerComponent placeholder="Choose To date"></DateTimePickerComponent>
      </div>

      {/* Output */}
      <div
        style={style.outputBox}
      >
        <h3>Output</h3>
        <p>From Date:</p>
        <p>To Date:</p>
        <p>Total Days:</p>
      </div>
    </div>
  );
}

export default App;
