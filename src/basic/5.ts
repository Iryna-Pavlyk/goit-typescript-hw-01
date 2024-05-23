enum DayOfWeek {
  Monday = "Monday ",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = " Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === "Saturday" || day === "Sunday") {
    return true;
  } else {
    return false;
  }
};

// console.log(isWeekend("Friday"));
// console.log(isWeekend("Saturday"));
