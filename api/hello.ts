import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
    const { hello = 'vercel' } = req.query;
    res.json({msg: `hello ${hello}`})
}
