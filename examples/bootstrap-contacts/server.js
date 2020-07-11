import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server listening on port ${port}.`));

const contacts = [];
let id = 0;

app.get('/contacts', (request, response) => {
  response.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  response.set('Pragma', 'no-cache');
  response.set('Expires', '0');
  response.json(contacts);
});

app.post('/contacts', (request, response) => {
  const contact = request.body.contact.trim();
  if (!contact) {
    response.status(422).send('The contact can not be empty.');
  } else {
    contacts.push({ id: ++id, name: contact });
    response.status(204).end();
  }
});
