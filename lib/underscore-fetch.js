/*
 * UnderscoreJS extension to add the fetch functionality of Ruby to JS objects
 * http://www.ruby-doc.org/core-1.9.3/Hash.html#method-i-fetch
 */

(function() {

  if(_ === undefined) {
    throw "underscore-fetch-plugin error: UnderscoreJS is not loaded";
  }

  if(_.fetch !== undefined) {
    throw "underscore-fetch-plugin error: fetch function is already defined";
  }

  _.fetch = function(obj, attr, defaultOrCallback, context) {
    if(!_.isUndefined(obj[attr])) {
      return obj[attr];
    }

    if(_.isUndefined(defaultOrCallback)) {
      throw new Error('Attribute not found');
    }

    if(!_.isFunction(defaultOrCallback)) {
      return defaultOrCallback;
    }

    return defaultOrCallback.call(context, attr);
  }

})();
