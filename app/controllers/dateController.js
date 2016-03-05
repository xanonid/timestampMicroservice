'use strict';

var strftime = require('strftime')

function DateHandler () {

	this.getDate = function (req, res) {
		 console.log(req.params);
		 var reg = new RegExp(/^[0-9]+/);
		 var d;
		 if(reg.test(req.params.date))
		 {
		 	d= new Date(req.params.date*1000);
		 } else if (Date.parse(req.params.date))
			d= new Date(req.params.date);
		 else
		 {
		 	res.json({unix:null,natural:null});
		 	return;
		 }
		 res.json({unix: Math.floor(d/1000.), natural: strftime("%B %-e, %Y",d)});
	};



}

module.exports = DateHandler;
