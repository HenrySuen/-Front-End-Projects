exports.render = function(req, res) {
    res.render('index', {
    	title: 'MEAN MVC',
    	user: JSON.stringify(req.user)
    });
};

exports.signUp = function(req, res) {
    res.render('signUp', {
        title: 'sighUp',
    });
};

