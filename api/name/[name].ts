import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
    res.json({
        msg: `my name of ${req.query.name}`
    })
}