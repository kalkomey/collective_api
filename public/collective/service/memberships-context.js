angular
  .module('Collective')
    .factory('MembershipsContext', function(Membership, PeopleContext, GroupsContext) {

      var memberships,
          promise       = Membership.getList().then(function($object) {

                            memberships = $object;
                          });

      return {
        promise: promise,
        extendMemberships: function() {

          _.each(memberships, function(membership) {

            membership.person = _.findWhere(PeopleContext.people, {id: membership.employee_id});
            membership.group  = _.findWhere(GroupsContext.groups, {id: membership. group_id});
          });

          return memberships;
        }
      };
    });
