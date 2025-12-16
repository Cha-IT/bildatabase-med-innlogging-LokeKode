const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signin.html'))
});

router.post('/', async (req, res) => {
    const id = Math.floor(Math.random() * 1000000);
    const fornavn = req.body.fornavn;
    const etternavn = req.body.etternavn;
    const epost = req.body.epost;
    const tlf = req.body.tlf;
    const passord = req.body.passord;

    eksisterendeBruker = db.prepare('SELECT * FROM person WHERE epost = ?').get(epost);
    if (eksisterendeBruker) {
        return res.status(400).json({ message: "Epost er allerede registrert" });
    } else {
        const hashedPassord = await bcrypt.hash(passord, 10);
        const stmt = db.prepare('INSERT INTO person (id, fornavn, etternavn, epost, tlf, passord) VALUES (?, ?, ?, ?, ?, ?)');
        stmt.run(id, fornavn, etternavn, epost, tlf, hashedPassord);
        res.json({ message: "Registrering vellykket" });
    }

    req.session.bruker = { id: bruker.id, fornavn: bruker.fornavn};
    res.json({ message: "Innlogging vellykket" });
})

module.exports = router;