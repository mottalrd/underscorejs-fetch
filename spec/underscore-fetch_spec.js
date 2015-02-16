describe('Underscore fetch', function() {

  describe('attribute exists', function() {
    var object = { testAttribute: 'testValue' };

    it('returns the attribute value', function() {
      expect(_.fetch(object, 'testAttribute', 'default value')).toEqual('testValue');
    });
  });

  describe('attribute does not exists', function() {
    var object = { };

    describe('without default value or callback', function() {
      it('throw Attribute not found error', function() {
        expect(function() {
          _.fetch(object, 'testAttribute')
        }).toThrow(new Error('Attribute not found'));
      });
    });

    describe('with default value', function() {
      it('returns the default value', function() {
        expect(_.fetch(object, 'testAttribute', 'default value')).toEqual('default value');
      });
    });

    describe('with callback function', function() {
      describe('without parameters', function() {
        it('returns the default value', function() {
          expect(_.fetch(object, 'testAttribute', function() { return 'fallback' } )).toEqual('fallback');
        });
      });

      describe('with parameters', function() {
        it('returns the default value', function() {
          var testParam = 'fallback';
          expect(
            _.fetch(object, 'testAttribute', function(testParam) { return testParam }, testParam, this)
          ).toEqual('fallback');
        });
      });
    });
  });

});
