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


## What I did in this project
- I have declared ```formatDate(action = "plus", count = 0)``` function with two parameters. You can pass action **plus** or **minus** and count should not less than **0**
- ```formatDate("plus",12)``` returns an object based on **plus** and **12** ```
    {
    "viewFormat": "25/12/2021 10:47 AM",
    "unixFormat": 1640407635,
    "logicalFormat": "2021-12-25T04:47:15.082Z"
    }
  ```
  - This return value stored into a state


### [Visit Official Documentation](https://ej2.syncfusion.com/react/documentation/calendar/getting-started/)







