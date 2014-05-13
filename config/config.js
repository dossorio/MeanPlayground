
var appPath = './app';

var config = {
    port: 8888,
    path: {
        app: appPath,
        models: appPath + '/models/',
        routes: appPath + '/routes/'
    },
    db: {url: 'mongodb://localhost/tanks'}
}

module.exports = config;