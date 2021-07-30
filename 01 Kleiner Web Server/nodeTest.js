const http = require('http‘); // Modul http importieren
const hostname = '127.0.0.1‘; // localhost, Port 3000
const port = 3000;
const server = http.createServer((request, response) => { // Web Server erstellen
response.statusCode = 200; // HTTP Status Code 200 (OK)
response.setHeader('Content-Type', 'text/plain‘); // MIME-Typ der Antwort
response.end('Hello World\n‘); // Seiteninhalt
});
server.listen(port, hostname, () => { // Web Server (Listener) starten
console.log(`Server running at http://${hostname}:${port}/`);
});