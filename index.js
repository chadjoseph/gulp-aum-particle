var fs = require('fs');
var path = require('path');
var through = require('through2');

var template = fs.readFileSync(path.join(__dirname, 'template.js'));

module.exports = function (main) {
  'use strict';

  return through.obj(function (file, encoding, callback) {
    var contents = template.toString(encoding)
        .replace('/*{{BUNDLE}}*/', file.contents.toString())
        .replace('/*{{MAIN}}*/', main.replace('.js', ''));

    file.contents = new Buffer(contents);

    this.push(file);

    callback();
  });
};

