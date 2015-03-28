var Pageres = require('pageres');

var pageres = new Pageres({
		delay: 2,
		format:'png'
	})
    .src('http://localhost:9000/', ['480x320', '1024x768', 'iphone 5s'], {crop: false})
    .dest('./screenshots/');


pageres.run(function (err) {
    if (err) {
        throw err;
    }

    console.log('done');
});