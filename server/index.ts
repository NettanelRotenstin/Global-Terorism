import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
import 'dotenv/config'
import { orgaAndLocateModel } from './Models/orgaAndLocateModel';
import { getQ1Service, getQ2Service, getQ3Service, getQ4ServiceAll, getQ4ServiceArea, getQ6ServiceArea, searchText,  } from './Services/getDataFromDB';
import { postEvent } from './Services/postService';
import IPost from './Types/Interfaces/IPost';
import { deleteEvent } from './Services/deleteService';
import http from 'http'
import { Server } from 'socket.io';
import { handelSocketConnection } from './Socket/funcsForSocket';
import { ceedSameTime1, ceedSameTime2, sidAttack } from './Services/ceedDataService';

const app = express();
export const server = http.createServer(app)
connentToMongo();
export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: "*",
    },
});
app.use(cors());
app.use(express.json());
io.on('connection',handelSocketConnection)
 
 
 
 server.listen(process.env.PORT, () => {
  console.log(`[server] I'm up on port ${process.env.PORT}`);
});
 
 

 
 

