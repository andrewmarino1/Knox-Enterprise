var hapi = require('hapi');

// Create hapi server instance
var server = new hapi.Server();

// add connection parameters
server.connection({  
    host: 'localhost',
    port: 3000
});

server.register(require('vision'))

server.views({  
    engines: {
        html: require('handlebars')
    },
    path: 'server_views',
    layoutPath: 'server_views/layout',
    layout: 'default'
});

// create your routes, currently it's just one
var routes = [  
    {
        method: 'GET',
        path: '/index.html',
        handler: function(request, reply) {
            return reply.view('index');
        }
    },
	 {
        method: 'GET',
        path: '/about.html',
        handler: function(request, reply) {
            return reply.view('about');
        }
    },
     {
        method: 'GET',
        path: '/contact.html',
        handler: function(request, reply) {
            return reply.view('contact');
        }
    }
];

// tell your server about the defined routes
server.route(routes);

// Start the server
server.start(function() {  
    // Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});