import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
import { ceedOrgan, ceedSchema1, ceedSchema1Attack2, ceedSchema2, ceedSchema3, ceedSchema4, ceedSchema5, getFileData } from './Services/ceedDataService';
 
const PORT = process.env.PORT
const app = express();

connentToMongo();

app.use(cors());
app.use(express.json());
 
 
app.listen(PORT, () => {
  console.log(`[server] I'm up on port ${PORT}`);
});
