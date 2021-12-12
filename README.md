# Working with date and time Functionality

## Installation
- Install package using ```npm install @syncfusion/ej2-react-calendars```

## Import
- In App.css import theme ```@import url("https://cdn.syncfusion.com/ej2/material.css");```
- In App.js import ```import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';```

## Basic implementation
- Add this component and check your output ```<DateTimePickerComponent></DateTimePickerComponent>```


## Formatting and giving range
Here is the Example 
> Set the Value
```
  const minDate = new Date("12/02/2021 10:30 AM");
  const maxDate = new Date("12/13/2021 10:30 AM");
```
> Rendering
```
<DateTimePickerComponent
          placeholder="Choose To date"
          min={minDate}
          max={maxDate}
          format="dd/MM/yyyy HH:mm a"
        >
</DateTimePickerComponent>
```





