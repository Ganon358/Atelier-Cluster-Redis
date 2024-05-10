const express = require('express');
const bodyParser = require('body-parser');
const Redis = require('ioredis');


const app = express();
app.use(bodyParser.json());


const redisNodes = [
    { host: '127.0.0.1', port: 7000 },
    { host: '127.0.0.1', port: 7001 },
    { host: '127.0.0.1', port: 7002 }
];


const client = new Redis.Cluster(redisNodes, { scaleReads: 'all', enableReadyCheck: true });


app.post('/employes', async (req, res) => {

    const { nom, poste, age } = req.body;


    const id_employe = await client.incr('employeIdCounter');

    const employe_key = `employe:${id_employe}`;
    await client.hmset(employe_key, 'nom', nom, 'poste', poste, 'age', age);


    res.status(201).json({
        message: 'Nouvel employé ajouté avec succès !',
        employeId: id_employe
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
