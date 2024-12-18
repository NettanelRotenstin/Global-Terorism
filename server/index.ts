import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
 
const PORT = process.env.PORT
const app = express();

connentToMongo();

app.use(cors());
app.use(express.json());

 
  

app.listen(PORT, () => {
  console.log(`[server] I'm up on port ${PORT}`);
});
