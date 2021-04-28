const day = (date, desiredLength = 2) => {
  return `${date.getDate()}`.padStart(desiredLength, "0");
};

const dayNoPrefix = (date) => {
  return `${date.getDate()}`;
};

const daysAgo = (d = new Date()) => {
  try {
    const msDay = 24 * 60 * 60 * 1000;

    const today = new Date();
    const then = new Date(d);

    today.setHours(0, 0, 0, 0);
    then.setHours(0, 0, 0, 0);

    const delta = (+today - +then) / msDay;
    return delta;
  } catch (e) {
    return 0;
  }
};

const month = (date, desiredLength = 2) => {
  return `${date.getMonth() + 1}`.padStart(desiredLength, "0");
};

const fullMonth = (date) => {
  const m = date.getMonth();

  switch (m) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

const fullYear = (date) => {
  return `${date.getFullYear()}`;
};

const watch = (date) => {
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
};

export { day, dayNoPrefix, daysAgo, fullMonth, fullYear, month, watch };
