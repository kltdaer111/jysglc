
const handler = (req , res) => {
    console.log('dbreq:', req);
    console.log('res:', res);
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }

    return Response.json({ name: 'John Doe' });

}

export const GET = handler;
export const POST = handler;