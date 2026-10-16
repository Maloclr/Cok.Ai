const http = require(‘http’);

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.setHeader(‘Content-Type’, ‘application/json; charset=utf-8’);

if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({
        name: 'Cok AI',
        message: 'Bienvenue sur Cok AI !',
        status: 'online'
    }));
} else {
    res.writeHead(404);
    res.end(JSON.stringify({
        error: 'Page introuvable'
    }));
}

});

server.listen(PORT, ‘0.0.0.0’, () => {
console.log(Cok AI est lancé sur le port ${PORT});
});
