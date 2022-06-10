export default function echo(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(req)
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base message'
    }))
} 