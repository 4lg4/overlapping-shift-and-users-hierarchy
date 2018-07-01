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

  return one.Employee === two.Employee &&
        two.StartTime >= one.StartTime &&
        two.StartTime <= one.EndTime;
};

module.exports = {isOverlapping};
