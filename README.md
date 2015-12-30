# SSH-Reverse-Tunnel
Implementation is in NodeJs

There are two scripts:

	  server.js
	  makerequest.js

You need to keep "server.js" on remote host and "makerequest.js" on localhost

Run server.js on remote host as:
		
		node server.js remote_port

Run makerequest.js on localhost as:

		node makerequest.js remote_addr remote_port port_to_forward

It will ask you for the password enter it and it will create reverse ssh tunnel between localhost and remote host
