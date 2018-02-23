#!/usr/bin/env node

var program = require('commander'),
		fs = require('fs'),
		replace = require('./replace.js');
		bootstrapMigrate = require('./bootstrap-migrate.js');

var path;

program
	.usage('[options] <dir>')
	.action(function (dir) {
		if(fs.existsSync(dir)) {
			path = dir;
		}
	})
	.parse(process.argv);

if(path) {
	replace({
		regex: "page-header",
		replacement: "display1",
		paths: [path],
		recursive: true,
		silent: true,
	});
} else {
	console.log("Path doesn't exists");
}