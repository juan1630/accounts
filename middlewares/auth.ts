import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import { typesEnv } from '../environment';

export const authValidation  = ( req:Request, resp: Response, next:NextFunction) => {

    console.log(  req.body, "req.body" )
    const { token } = req.body;

    try {

        console.log(jwt.verify( token, typesEnv.token_dev || '' ) )
        if( !jwt.verify( token, typesEnv.token_dev || '' ) ) {

            return resp.status(401).json({
                ok: false,
                message: 'Credenciales invalidas',
            })
        }
        
        next();
    }catch(error) {
        console.log(error)
        return resp.status(500).json({
            ok: false,
            message: 'Hubo un error',
            error
        })
    }


};