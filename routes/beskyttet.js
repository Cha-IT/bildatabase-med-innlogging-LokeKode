const express = require('express');
const router = express.Router();
const db = require('../db');
const kreverInnlogging = require('../auth.js');
const bcrypt = require('bcrypt');

router.get("/", kreverInnlogging, (req, res) => {
    const html = 
        `<p>Velkommen, ${req.session.bruker.fornavn}! Dette er en beskyttet side.</p>
        <form onsubmit="logout(event)">
            <button type="submit">Logg ut</button>
        </form>
        `;
    res.send(html);
});

module.exports = router;