import type { NextApiRequest, NextApiResponse } from "next";

import initAuth from "@/lib/auth";

async function login(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        await initAuth.handleLogin(req, res, {
            redirectTo: `${req.headers.referer}api/callback`
        });
    } catch(error) {
        console.error(error);
        res.status(error.status ?? 500).end(error.message);
    }
}

export default login;