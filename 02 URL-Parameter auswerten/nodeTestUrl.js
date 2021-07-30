const http = require('http'); // Modul http importieren
const url = require('url'); // Modul url importieren
const querystring = require('querystring'); // Modul querystring importieren
const hostname = '127.0.0.1'; // localhost, Port 3000
const port = 3000;

const server = http.createServer((request, response) => { // Web Server erstellen
	const urlObject = url.parse(request.url); // Zerlegt URL-String in die Bestandteile (URL-Objekt)
	console.log(urlObject);
	const searchParamsString = urlObject.query; // Query ohne ? bekommen als String
	console.log(searchParamsString);
	const searchParams = querystring.parse(searchParamsString); // Zerlegt Query in assoziatives Array (K/V)
	
	response.statusCode = 200; // HTTP Status Code 200 (OK)
	response.setHeader('Content-Type', 'text/plain'); // MIME-Typ der Antwort
	response.end('Hello World\n'); // Seiteninhalt
}).listen(port, hostname, () => { // Web Server (Listener) starten [GEHT AUCH INDEM MAN DIE SERVER VARIABLE AUFRUGT server.listen(...)]
console.log(`Server running at http://${hostname}:${port}/`);
});