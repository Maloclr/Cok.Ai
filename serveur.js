const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            name: 'Cok AI',
            message: 'Bienvenue sur Cok AI !',
            status: 'online'
        }));
        return;
    }

    if (req.url === '/api/chat' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);

                res.writeHead(200);
                res.end(JSON.stringify({
                    text: "Salut ! Je suis Cok AI. Mon serveur fonctionne, mais mon intelligence artificielle doit encore être connectée."
                }));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({
                    error: 'Message invalide.'
                }));
            }
        });

        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({
        error: 'Page introuvable'
    }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Cok AI est lancé sur le port ${PORT}`);
});
