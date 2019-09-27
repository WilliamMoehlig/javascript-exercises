function UserService() {
  this.getById = function(id) {
    return { id: 123, name: 'peter' };
  };
  this.getAll = function() {
    return [{ id: 123, name: 'peter' }, { id: 222, name: 'robbert' }];
  };
}

export default new UserService();