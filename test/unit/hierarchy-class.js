const mock = require('../backend-mock.json');
const {Hierarchy} = require('../../src/hierarchy-class');

describe('hierarchy-class.js', () => {
  describe('constructor', () => {
    it('should have method getSubOrdinates', () => {
      const hierarchy = new Hierarchy();
      hierarchy.getSubOrdinates.should.be.a('function');
    });

    it('should have method setRoles', () => {
      const hierarchy = new Hierarchy();
      hierarchy.setRoles.should.be.a('function');
    });

    it('should have method setUsers', () => {
      const hierarchy = new Hierarchy();
      hierarchy.setUsers.should.be.a('function');
    });
  });

  describe('setRoles', () => {
    it('should throw an error if is empty', () => {
      const hierarchy = new Hierarchy();
      expect(() => hierarchy.setRoles()).to.throw(Error);
    });
  });

  describe('setUsers', () => {
    it('should throw an error if is empty', () => {
      const hierarchy = new Hierarchy();
      expect(() => hierarchy.setUsers()).to.throw(Error);
    });
  });

  describe('getSubOrdinates', () => {
    it('should throw an error if is empty', () => {
      const hierarchy = new Hierarchy();
      expect(() => hierarchy.getSubOrdinates()).to.throw(Error);
    });

    it('should return an arrays of Users objects', () => {
      const hierarchy = new Hierarchy();
      hierarchy.setUsers(mock.users);
      hierarchy.setRoles(mock.roles);
      expect(hierarchy.getSubOrdinates(3)).to.eql([
        {
          Id: 2,
          Name: 'Emily Employee',
          Role: 4,
        },
        {
          Id: 5,
          Name: 'Steve Trainer',
          Role: 5,
        },
      ]);

      expect(hierarchy.getSubOrdinates(1)).to.eql([
        {
          Id: 2,
          Name: 'Emily Employee',
          Role: 4,
        },
        {
          Id: 3,
          Name: 'Sam Supervisor',
          Role: 3,
        },
        {
          Id: 4,
          Name: 'Mary Manager',
          Role: 2,
        },
        {
          Id: 5,
          Name: 'Steve Trainer',
          Role: 5,
        },
      ]);
    });

    it('should return an arrays of Users objects', () => {
      const hierarchy = new Hierarchy();
      hierarchy.setUsers(mock.usersDifferentIds);
      hierarchy.setRoles(mock.rolesDifferentIds);
      expect(hierarchy.getSubOrdinates(3)).to.eql([
        {
          Id: 2,
          Name: 'Emily Employee',
          Role: 12,
        },
        {
          Id: 5,
          Name: 'Steve Trainer',
          Role: 7,
        },
      ]);

      expect(hierarchy.getSubOrdinates(1)).to.eql([
        {
          Id: 2,
          Name: 'Emily Employee',
          Role: 12,
        },
        {
          Id: 3,
          Name: 'Sam Supervisor',
          Role: 5,
        },
        {
          Id: 4,
          Name: 'Mary Manager',
          Role: 10,
        },
        {
          Id: 5,
          Name: 'Steve Trainer',
          Role: 7,
        },
      ]);
    });

    it('should throw an error if there\'s no user with the specified Id', () => {
      expect(() => (new Hierarchy()).getSubOrdinates(5)).to.throw(Error);
    });

    it('should return an empty array if there\'s no subordinates', () => {
      const hierarchy = new Hierarchy();
      hierarchy.setUsers(mock.users);
      hierarchy.setRoles(mock.roles);

      expect(hierarchy.getSubOrdinates(5)).to.eql([]);
    });
  });
});
