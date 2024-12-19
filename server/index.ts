import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
import { ceedOrgan, ceedSchema1, ceedSchema1Attack2, ceedSchema2, ceedSchema3, ceedSchema4, ceedSchema5, ceedSchema6, getFileData } from './Services/ceedDataService';
import 'dotenv/config'
import { orgaAndLocateModel } from './Models/orgaAndLocateModel';
import { getQ1Service, getQ2Service, getQ3Service, getQ4ServiceAll, getQ4ServiceArea,  } from './Services/getDataFromDB';
 
const app = express();

connentToMongo();

app.use(cors());
app.use(express.json());
 
getQ4ServiceAll()
app.listen(process.env.PORT, () => {
  console.log(`[server] I'm up on port ${process.env.PORT}`);
});
 