repl = require("repl"),
	   require("net");

// Iniciar REPL con un prompt distinto y con el parametro de ignoreUndefined configurado a true

repl.start("node personalizado> ",null,null,null,true);

net.createServer(function(socket){
	repl.start("node via TCP socket> ", socket);
}).listen(8124);
