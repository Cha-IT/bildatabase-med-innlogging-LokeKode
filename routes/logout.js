const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/beskyttet'))
})

router.post('/', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Feil ved utlogging" });
        }
        res.json({ message: "Utlogging vellykket" });
        window.location.href = '/login';
    });
})