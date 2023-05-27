import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getBase(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        let data = await fetch( req.query.data == null ? `https://pokeapi.co/api/v2/pokemon?limit=151` : `${req.query.data}`)
        return res.status(200).json(await data.json());
    }
    catch (err) {
        return res.status(500).json({ error: err });
    }
    
}