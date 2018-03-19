import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import { generateHash } from '../utils/security';
import Table from '../table';

let authors = new Table('authors');

let router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
        console.log(token);
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next); 
});

router.post('/signup', (req, res, next) => {
    generateHash(req.body.password)
    .then((hash) => {

        let newAuthor = {
            email: req.body.email,
            hash: hash
        }
        authors.insert(newAuthor)
        .then(() => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        next(err);
    });
});

export default router;