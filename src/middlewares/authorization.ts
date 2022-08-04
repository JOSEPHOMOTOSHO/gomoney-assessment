import { Response, Request, NextFunction } from 'express';


export const isAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { user } = req;
    if (user.userType !== "ADMIN") {
        console.log(user)
        res.status(403).send({ success: false, message: 'You are not authorized to perform this action' });
    } else {
        next()
    }
};
