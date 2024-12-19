import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
import { ceedOrgan, ceedSchema1, ceedSchema1Attack2, ceedSchema2, ceedSchema3, ceedSchema4, ceedSchema5, ceedSchema6, getFileData } from './Services/ceedDataService';
import 'dotenv/config'
import { orgaAndLocateModel } from './Models/orgaAndLocateModel';
import { getQ1Service, getQ2Service, getQ3Service, getQ4ServiceAll, getQ4ServiceArea, getQ6ServiceArea,  } from './Services/getDataFromDB';
import { postEvent } from './Services/postService';
import IPost from './Types/Interfaces/IPost';
 
const app = express();

connentToMongo();

app.use(cors());
app.use(express.json());
const evenb:IPost = {attackType:'g',nkill:1,nwound:1,region:'g',country:'g',city:'g',lat:1,lon:1,organName:'g',year:1,month:1}
postEvent(evenb) 
app.listen(process.env.PORT, () => {
  console.log(`[server] I'm up on port ${process.env.PORT}`);
});
 