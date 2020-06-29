import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
    res.setHeader('Content-type', 'text/plain');
    res.send(JSON.stringify({
        method: req.method,
        url: req.url,
        headers: req.headers,
        query: req.query,
        body: req.body,
    }, null, 2))
}
