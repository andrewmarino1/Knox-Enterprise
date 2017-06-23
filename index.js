const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
 
const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'knox')
            }
        }
    }
});
server.connection({ port: 3000 });
 
server.register(Inert, () => {});
 
server.route({
    method: 'GET',
    path: '/knox/index.html',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});
 
server.start((err) => {
 
    if (err) {
        throw err;
    }
 
    console.log('Server running at:', server.info.uri);
});