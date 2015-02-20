describe('Underscore fetch', function() {

  describe('attribute exists', function() {
    var object = { color: 'blue' };

    it('returns the attribute value', function() {
      expect(_.fetch(object, 'color', 'blue')).toEqual('blue');
    });
  });

  describe('attribute does not exists', function() {
    var object = { };

    describe('without default value or callback', function() {
      it('throw Attribute not found error', function() {
        expect(function() {
          _.fetch(object, 'color')
        }).toThrow(new Error('Attribute not found'));
      });
    });

    describe('with default value', function() {
      it('returns the default value', function() {
        expect(_.fetch(object, 'color', 'black')).toEqual('black');
      });
    });

    describe('with callback function', function() {
      describe('without parameters', function() {
        it('returns the default value', function() {
          expect(_.fetch(object, 'testAttribute', function() {
            return 'black';
          })).toEqual('black');
        });
      });

      describe('with parameters', function() {
        it('returns the default value', function() {
          var colorParam = 'black';
          expect(
            _.fetch(object, 'color', function(color) { return color }, colorParam, this)
          ).toEqual('black');
        });
      });
    });
  });

});

