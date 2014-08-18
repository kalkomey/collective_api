angular
  .module('Collective')
    .factory('GroupsContext', function(Group) {

      var groups = Group.getList().$object;

      return {
        groups: groups,
        search: function(query) {

          groups = Group.customGET('search', query).$object;
        }
      };
    });
