app.factory('socket', function (socketFactory) {
	return socketFactory({
		prefix: 'foo~',
		ioSocket: io.connect('http://192.168.43.228:4444')
	});
});
