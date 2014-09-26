angular
  .module('Collective')
    .factory('PeopleContext', function(Person) {

      var promise = Person.getList();

      return {
        promise: promise,
        people: promise.$object,
        addPerson: function(person) {

          var promise = Person.post(person);

          this.people.push(promise.$object);
        },
        removePerson: function(person) {

          person.remove();

          var index = this.people.indexOf(person);

          this.people.splice(index, 1);
        }
      };
    });
