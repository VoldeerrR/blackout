import { OAuth2Client } from 'google-auth-library';
import { Request, Response } from 'express';
import { User } from '../types/index.d';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || '';

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

export const authenticateUser = async (req: Request, res: Response) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        const ticket = await oauth2Client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const user: User = {
            id: payload?.sub || '',
            name: payload?.name || '',
            email: payload?.email || '',
            picture: payload?.picture || '',
        };

        // Here you would typically save the user to your database and create a session
        // For now, we'll just return the user object
        return res.status(200).json(user);
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};