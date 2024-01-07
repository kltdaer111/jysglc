import { NextApiRequest, NextApiResponse } from "next";

const handler = (req : NextApiRequest, res : NextApiResponse) => {
    console.log('dbreq:', req);
    console.log('res:', res);
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
    res.status(200).json({});
}

export const GET = handler;
export const POST = handler;