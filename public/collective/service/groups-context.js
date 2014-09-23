angular
  .module('Collective')
    .factory('GroupsContext', function(Group) {

      var promise = Group.getList();

      return {
        promise: promise,
        groups: promise.$object,
        search: function(query) {

          groups = Group.customGET('search', query).$object;
        }
      };
    });
