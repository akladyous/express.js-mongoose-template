import express from 'express';
export const users = express.Router();

const usersHome = (req, res) => {
    res.status(200).json({ data: 'aaaaa' })
}

users.get('/users', usersHome)
users.all("/users/*", (req, res, next) => {
    res.status(404).json({message: 'path not found'})
})
