const http = require('http'); // Modul http importieren
const url = require('url'); // Modul url importieren
const querystring = require('querystring'); // Modul querystring importieren
const hostname = '127.0.0.1'; // localhost, Port 3000
const port = 3000;

const server = http.createServer((request, response) => { // Web Server erstellen
	var html = buildHtmlPage(request);
	response.writeHead(200, {'Content-Type': 'text/html'}); // HTTP Status Code 200 (OK) und MIME-Typ der Antwort	
	response.end(html);
}).listen(port, hostname, () => { // Web Server (Listener) starten [GEHT AUCH INDEM MAN DIE SERVER VARIABLE AUFRUGT server.listen(...)]
console.log(`Server running at http://${hostname}:${port}/`);
});

function buildHtmlPage(request) {
	const urlObject = url.parse(request.url); // Zerlegt URL-String in die Bestandteile (URL-Objekt)
	const searchParamsString = urlObject.query; // Query ohne ? bekommen als String
	const searchParams = querystring.parse(searchParamsString); // Zerlegt Query in assoziatives Array (K/V)
	console.log(searchParams);
	
	var header = '';
	var body = '';
	
	// build header string
	//		add meta information
	header += '<meta charset="UTF-8"/>' + '<title>Quadratzahlen ' + searchParams.von + '² bis ' + searchParams.bis + '²</title>'
	//		add css style
	header += '<style type="text/css">table{border-collapse: collapse;border: 1px solid black;}table td, th{border: 1px solid black}table td{text-align: right};</style>'
	
	// build body string
	// 		add headline
	body += '<h1>Quadratzahlen ' + searchParams.von + '² bis ' + searchParams.bis + '²</h1>'
	// 		add table
	body += '<table><tr><th>n</th><th>n²</th></tr>'
	for (i = searchParams.von; i <= searchParams.bis; i++) {
		body += '<tr><td>' + i + '</td><td>' + Math.pow(i, 2) + '</td></tr>'
	}
	body += '</table>'
	
	return '<!DOCTYPE html>' + '<html><head>' + header + '</head><body>' + body + '</body></html>';
 };