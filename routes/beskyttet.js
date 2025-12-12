const express = require('express');
const router = express.Router();
const db = require('../db');
const kreverInnlogging = require('../auth.js');
const bcrypt = require('bcrypt');

router.get("/", kreverInnlogging, (req, res) => {
    res.send(`<p>Velkommen, ${req.session.bruker.fornavn}! Dette er en beskyttet side.</p>
        <button onclick="loggut()">Logg ut</button>
        <script src ="/javascript/logoutHandler.js"></script>`
    );
});

module.exports = router;