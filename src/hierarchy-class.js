const Hierarchy = function Hierarchy() {
  let _users = [];
  let _roles = [];
  let _indexedRoles = [];

  const _indexRoles = ()=> {
    let indexed = {};
    const root = _roles.find((r)=> r.Parent === 0);
    indexed[root.Id] = [];

    for (const {Parent, Id} of _roles) {
      if (indexed[Parent] instanceof Array) {
        indexed[Parent].push(Id);
      } else {
        indexed[Parent] = [Id];
      };

      // add all roles as a children of the root
      if (indexed[root.Id].indexOf(Id) < 0) { // prevent duplicates
        indexed[root.Id].push(Id);
      }
    }

    _indexedRoles = indexed;
  };

  const setRoles = (roles) => {
    if (!Array.isArray(roles)) {
      throw new Error('Roles is required and should be an Array of Role Objects');
    }

    _roles = roles;
    _indexRoles();
  };

  const setUsers = (users) => {
    if (!Array.isArray(users)) {
      throw new Error('Users is required and should be an Array of User Objects');
    }

    _users = users;
  };

  const getSubOrdinates = (id) => {
    const {Role, Id} = _users.find(({Id}) => Id === id) || {};

    if (!Role) {
      throw new Error(`User with Role '${id}' not found.`);
    }

    return _users
      .filter((user) =>
        _indexedRoles[Role] && _indexedRoles[Role].indexOf(user.Role) !== -1 &&
        user.Id !== Id
      )
      .sort((first, second) => first.Id > second.Id);
  };

  return {
    setRoles,
    setUsers,
    getSubOrdinates,
  };
};

module.exports = {Hierarchy};
