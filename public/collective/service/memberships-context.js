angular
  .module('Collective')
    .factory('MembershipsContext', function(Membership, PeopleContext, GroupsContext) {

      var promise = Membership.getList();

      return {
        promise: promise,
        memberships: promise.$object,
        addMembership: function(membership) {

          Membership.post(membership);

          membership.person = _.findWhere(PeopleContext.people, {id: membership.employee_id});
          membership.group  = _.findWhere(GroupsContext.groups, {id: membership.group_id});

          this.memberships.push(membership);
        },
        deleteMembership: function(membership) {

          Membership.customDELETE('destroy', {group_id: membership.group_id, employee_id: membership.employee_id});

          var index = this.memberships.indexOf(membership);

          this.memberships.splice(index, 1);
        },

        // handles the breaking of many memberships - used when deleting a person or group
        breakMemberships: function(params) {

          var i = this.memberships.length,
              personMatch,
              groupMatch;

          while(i--) {
            personMatch = params.person_id && this.memberships[i].employee_id === params.person_id;
            groupMatch = params.group_id && this.memberships[i].group_id === params.group_id;

            if (personMatch || groupMatch) {
              this.deleteMembership(this.memberships[i]);
            }
          }
        },
        extendMemberships: function() {

          _.each(this.memberships, function(membership) {

            membership.person = _.findWhere(PeopleContext.people, {id: membership.employee_id});
            membership.group  = _.findWhere(GroupsContext.groups, {id: membership.group_id});
          });

          return this.memberships;
        },
      };
    });
