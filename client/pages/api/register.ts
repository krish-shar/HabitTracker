import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'POST') {
        return res.status(405).json({message: 'Method not allowed'})
    }

    console.log("Got here")

    try {
        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });


    } catch (e) {
        console.error(e)
        return res.status(500).json({message: 'Internal server error'})
    }

}