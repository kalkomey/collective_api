angular
  .module('Collective')
    .factory('PeopleContext', function(Person) {

      var promise = Person.getList();

      return {
        promise: promise,
        people: promise.$object
      };
      // var people = Person.getList().$object;

      // return people;
    });
