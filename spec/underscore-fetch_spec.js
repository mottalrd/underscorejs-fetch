describe('Underscore fetch', function() {
  var item = { name: 'pen', color: 'blue' };

  describe('attribute exists', function() {
    it('returns the value', function() {
      expect(_.fetch(item, 'name')).toEqual('pen');
    });
  });

  describe('attribute does not exists', function() {
    describe('without default value or callback', function() {
      it('throw Attribute not found error', function() {
        expect(function() {
          _.fetch(item, 'price')
        }).toThrow(new Error('Attribute not found'));
      });
    });

    describe('with default value', function() {
      it('returns the default value', function() {
        expect(_.fetch(item, 'price', '2$')).toEqual('2$');
      });
    });

    describe('with callback function', function() {
      describe('without parameters', function() {
        it('returns the default value', function() {
          expect(_.fetch(item, 'price', function(key) {
            return 'The ' + key + ' cannot be found';
          })).toEqual('The price cannot be found');
        });
      });
    });
  });
});
