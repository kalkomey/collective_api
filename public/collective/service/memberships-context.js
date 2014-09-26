angular
  .module('Collective')
    .factory('MembershipsContext', function(Membership, PeopleContext, GroupsContext) {

      var promise = Membership.getList();

      return {
        promise: promise,
        memberships: promise.$object,
        extendMemberships: function() {

          _.each(this.memberships, function(membership) {

            membership.person = _.findWhere(PeopleContext.people, {id: membership.employee_id});
            membership.group  = _.findWhere(GroupsContext.groups, {id: membership.group_id});
          });

          return this.memberships;
        },
        addMembership: function(membership) {

          Membership.post(membership);

          membership.person = _.findWhere(PeopleContext.people, {id: membership.employee_id});
          membership.group  = _.findWhere(GroupsContext.groups, {id: membership.group_id});

          console.log(membership);

          this.memberships.push(membership);
        },
        breakMembership: function(membership) {

          Membership.customDELETE('destroy', {group_id: membership.group_id, employee_id: membership.employee_id});

          var index = this.memberships.indexOf(membership);

          this.memberships.splice(index, 1);
        }
      };
    });
