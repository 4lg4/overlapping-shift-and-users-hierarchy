const isAValidUnixDate = (date) => (new Date(date)).getTime();

const isOverlapping = (one, two) => {
  if (!one || !two) {
    throw new Error('Missing schedule1 and/or schedule2 variables');
  }

  if (!one.StartTime || !one.EndTime) {
    throw new Error('Missing schedule1 StartTime and/or EndTime');
  }

  if (!two.StartTime || !two.EndTime) {
    throw new Error('Missing schedule2 StartTime and/or EndTime');
  }

  if (!isAValidUnixDate(one.StartTime) || !isAValidUnixDate(one.EndTime) || !isAValidUnixDate(two.StartTime) || !isAValidUnixDate(two.EndTime)) {
    throw new Error('Schedule objects should be valid UNIX dates');
  }

  if (one.StartTime >= one.EndTime || two.StartTime >= two.EndTime) {
    throw new Error('Schedule start time should be greater or equal than schedule end time');
  }

  if (one.Employee !== two.Employee) {
    return false;
  }

  // can do simply like this but the other way is more scalable and clean
  // if (one.StartTime > two.StartTime) {
  //   return two.EndTime >= one.StartTime;
  // }
  // return one.EndTime >= two.StartTime;

  const shifts = sortShifts(one, two);

  return shifts[0].EndTime >= shifts[1].StartTime;
};

const sortShifts = (one, two) => {
  let shifts = [];
  if (one.StartTime > two.StartTime) {
    shifts.push(two);
    shifts.push(one);
  } else {
    shifts.push(one);
    shifts.push(two);
  }

  return shifts;
};

module.exports = {isOverlapping};
