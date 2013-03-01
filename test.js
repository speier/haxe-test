(function () { "use strict";
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var packages = {}
packages.common = {}
packages.common.Person = function(name) {
	this.name = name;
};
packages.common.Person.prototype = {
	greet: function() {
		return "Hello world, my name is " + this.name;
	}
}
var Developer = function(name) {
	packages.common.Person.call(this,name);
};
Developer.__super__ = packages.common.Person;
Developer.prototype = $extend(packages.common.Person.prototype,{
});
var Test = function() { }
Test.main = function() {
	var frank = new Developer("Kalman Speier");
	console.log(frank.greet());
	var targets = ["Flash","Javascript","PHP","Neko","C++","iOS","Android","webOS","C#"];
	console.log("Haxe is a great language that can target:");
	var _g = 0;
	while(_g < targets.length) {
		var target = targets[_g];
		++_g;
		console.log(" - " + target);
	}
	console.log("And many more!");
}
Test.main();
})();
