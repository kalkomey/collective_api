angular
  .module('Collective')
    .factory('PeopleContext', function(Person) {

      var people = Person.getList().$object;

      return {
        people: people
      };
    });
