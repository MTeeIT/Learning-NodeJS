var db = require('../db.js');
var shortid = require('shortid');

module.exports.index= function(req, res) {
	res.render('users/index', {
		users: db.get('users').value()// lay dl
	});
};

module.exports.search=function (req, res) {  //search
	var q = req.query.q;
	var matchedUsers = db.get('users').value().filter(function(user) {
		return user.name.indexOf(q) !== -1;
	});

	res.render('users/index', {
		users:matchedUsers
	});
};

module.exports.create= function(req, res) { //create
	res.render('users/create');
};

module.exports.get = function(req, res) {// nguoi dung truyen vao
	var id = req.params.id; 
	//var id = parseInt(req.params.id); // luu lai tai req, kieu string chuyen sang so  
	// lay user ra tu db

	var user = db.get('users').find({id: id}).value();
//
	res.render('users/view', {
		user: user
	});
};

module.exports.postCreate= function(req, res) { 
	req.body.id = shortid.generate(); // tu luu id cho minh
	var errors = [];

	if(!req.body.name) {
		errors.push('Name is require');
	}
	if(!req.body.phone) {
		errors.push('Phone is require');
	}

	if(errors.length) {
		res.render('users/create' , {
			errors: errors,
			values: req.body //hien thi gia tri ndung nhap
		});
		return;

	}
	db.get('users').push(req.body).write(); // ghi dl
	res.redirect('/users'); // tro ve trang index
};
