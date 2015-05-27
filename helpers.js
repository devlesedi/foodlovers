var hbs = require('hbs');
//http://axiacore.com/blog/check-if-item-array-handlebars/
//http://zackehh.com/safely-creating-custom-handlebars-helpers/
module.exports = function(){
	var blocks = {};

	hbs.registerHelper('extend', function(name, context) {
	    var block = blocks[name];
	    if (!block) {
	        block = blocks[name] = [];
	    }

	    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
	});

	hbs.registerHelper('block', function(name) {
	    var val = (blocks[name] || []).join('\n');

	    // clear the block
	    blocks[name] = [];
	    return val;
	});
	hbs.registerHelper('ifIn', function(elem, list, options) {
	  if(list.indexOf(elem) > -1) {
	    return options.fn(this);
	  }
	  return options.inverse(this);
	});

	// Template Helpers
	
};