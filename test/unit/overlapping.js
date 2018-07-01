const {isOverlapping} = require('../../src/overlapping');

const firstSchedule = {
  Id: 1,
  Employee: 1,
  Department: 1,
  StartTime: 1458165600,
  EndTime: 1458194400,
};
const secondSchedule = {
  Id: 2,
  Employee: 1,
  Department: 1,
  StartTime: 1458194400,
  EndTime: 1458194600,
};
const thirdSchedule = {
  Id: 3,
  Employee: 2,
  Department: 1,
  StartTime: 1458165600,
  EndTime: 1458194400,
};
const forthSchedule = {
  Id: 4,
  Employee: 1,
  Department: 1,
  StartTime: 1458195600,
  EndTime: 1458197400,
};

describe('overlapping.js', () => {
  describe('isOverlapping', () => {
    it('should return true if overlapping', () => {
      expect(isOverlapping(firstSchedule, secondSchedule)).to.be.true;
    });

    it('should return false if different user', () => {
      expect(isOverlapping(firstSchedule, thirdSchedule)).to.be.false;
    });

    it('should return false if shifts are in different time range', () => {
      expect(isOverlapping(forthSchedule, firstSchedule)).to.be.false;
    });

    it('should return false if not overlapping', () => {
      expect(isOverlapping(firstSchedule, forthSchedule)).to.be.false;
    });

    it('should return true if overlapping', () => {
      expect(isOverlapping(firstSchedule, secondSchedule)).to.be.true;
    });

    it('should throw an error if start date is greater than end date', () => {
      const firstWrongSchedule = {
        Id: 1,
        Employee: 1,
        Department: 1,
        StartTime: 1458194400,
        EndTime: 1458165600,
      };
      const secondWrongSchedule = {
        Id: 1,
        Employee: 1,
        Department: 1,
        StartTime: 1458194300,
        EndTime: 1458166650,
      };
      expect(() => isOverlapping(firstWrongSchedule, secondWrongSchedule)).to.throw(Error);
    });

    it('should throw an error if schedule object does not have a valid unix date', () => {
      const firstWrongSchedule = {
        Id: 1,
        Employee: 1,
        Department: 1,
        StartTime: 'invalid-date',
        EndTime: 1458165600,
      };
      const secondWrongSchedule = {
        Id: 1,
        Employee: 1,
        Department: 1,
        StartTime: 1458194300,
        EndTime: 1458166650,
      };
      expect(() => isOverlapping(firstWrongSchedule, secondWrongSchedule)).to.throw(Error);
    });

    it('should throw an error if missing entry one or entry two', () => {
      expect(() => isOverlapping()).to.throw(Error);
    });

    it('should throw an error if missing entry one StartTime and/or EndTime', () => {
      expect(() => isOverlapping({StartTime: 12312312}, secondSchedule)).to.throw(Error);
      expect(() => isOverlapping({EndTime: 12312312}, secondSchedule)).to.throw(Error);
    });

    it('should throw an error if missing entry two StartTime and/or EndTime', () => {
      expect(() => isOverlapping(firstSchedule, {StartTime: 12312312})).to.throw(Error);
      expect(() => isOverlapping(firstSchedule, {EndTime: 12312312})).to.throw(Error);
    });
  });
});
