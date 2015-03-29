var Pageres = require('pageres');

var pageres = new Pageres({
		delay: 2,
		format:'png'
	})
    .src('http://localhost:9000/', ['360x640','640x360', '800x600' ,'1024x768'], {crop: false})
    .src('http://localhost:9000/admListaMateria.html', ['360x640','640x360', '800x600' ,'1024x768'], {crop: false})
    .src('http://localhost:9000/admListarCategoria.html', ['360x640','640x360', '800x600' ,'1024x768'], {crop: false})
    .dest('./screenshots/');


pageres.run(function (err) {
    if (err) {
        throw err;
    }

    console.log('done');
});