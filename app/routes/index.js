'use strict';

var fs=require("fs");
var renderme = require("renderme");
var path = require("path");

var cwd = process.cwd();
var DateHandler = require(cwd + '/app/controllers/dateController.js');

module.exports = function (app) {

	var dateHandler = new DateHandler();

    app.route("/").
    get(function(req,res) {
    	console.log(1);

      renderme({
        readme: fs.readFileSync(path.join(__dirname,"../..","README.md"),'utf-8'),
        readmeFilename: 'README.md'
        },
        function rendered(err, html) {
          if (err) { throw err; }
          else {
            res.end(html);
          }
        }
      );
    });

	 app.route('/:date')
		.get(dateHandler.getDate);
		
}
