import { promises as fs } from 'fs'
import * as path from 'path'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
    const file1 = path.join(__dirname, 'dummy1.txt');
    const data1 = await fs.readFile(file1);
    const file2 = path.join(__dirname, data1.toString().trim());
    const data2 = await fs.readFile(file2);
    res.send(data2);
}
