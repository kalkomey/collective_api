describe('capitalize', function() {

	beforeEach(module('Collective'));

	it('should ...', inject(function($filter) {

        var filter = $filter('capitalize');

		expect(filter('input')).toEqual('output');

	}));

});