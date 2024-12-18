import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
import { ceedSchema1, ceedSchema1Attack2, ceedSchema2, ceedSchema3, getFileData } from './Services/ceedDataService';
 
const PORT = process.env.PORT
const app = express();

connentToMongo();

app.use(cors());
app.use(express.json());
//ceedSchema1()
//ceedSchema1Attack2()
//ceedSchema2()
//ceedSchema3()
app.listen(PORT, () => {
  console.log(`[server] I'm up on port ${PORT}`);
});
