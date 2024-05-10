const express = require('express');
const bodyParser = require('body-parser');
const RedisCluster = require('redis-clustr');

const app = express();
app.use(bodyParser.json());

const startupNodes = [
    {"host": "173.17.0.2", "port": "7000"},
    {"host": "173.17.0.3", "port": "7001"},
    {"host": "173.17.0.4", "port": "7002"}
];

const client = new RedisCluster(startupNodes, { decode: true });

app.post('/employes', (req, res) => {
    const data = req.body;
    const nom = data.nom;
    const poste = data.poste;
    const age = data.age;

    client.incr('employeIdCounter', (err, id_employe) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la génération de l\'identifiant de l\'employé' });
        }

        const employeKey = `employe:${id_employe}`;
        client.hmset(employeKey, { nom: nom, poste: poste, age: age });

        const response = {
            message: 'Nouvel employé ajouté avec succès !',
            employeId: id_employe
        };
        res.status(201).json(response);
    });
});

app.post('/utilisateurs', (req, res) => {
    const data = req.body;
    const username = data.username;
    const email = data.email;

    client.incr('utilisateurIdCounter', (err, id_utilisateur) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la génération de l\'identifiant de l\'utilisateur' });
        }

        const utilisateurKey = `utilisateur:${id_utilisateur}`;
        client.hmset(utilisateurKey, { username: username, email: email });

        const response = {
            message: 'Nouvel utilisateur ajouté avec succès !',
            userId: id_utilisateur
        };
        res.status(201).json(response);
    });
});


app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
