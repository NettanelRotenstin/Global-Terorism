import express, { Request, Response } from 'express';
import { connentToMongo } from './DB/config';
import cors from 'cors'
import { ceedOrgan, ceedSchema1, ceedSchema1Attack2, ceedSchema2, ceedSchema3, ceedSchema4, ceedSchema5, ceedSchema6, getFileData } from './Services/ceedDataService';
import 'dotenv/config'
import { orgaAndLocateModel } from './Models/orgaAndLocateModel';
import { getQ1Service, getQ2Service, getQ3Service, getQ4ServiceAll, getQ4ServiceArea, getQ6ServiceArea,  } from './Services/getDataFromDB';
import { postEvent } from './Services/postService';
import IPost from './Types/Interfaces/IPost';
import { deleteEvent } from './Services/deleteService';
import http from 'http'
import { Server } from 'socket.io';
import { handelSocketConnection } from './Socket/funcsForSocket';
import analystRouter from './Routes/analystRouter';
import relationshipRouter from './Routes/relationshipRouter';

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

app.use("/api/analysis", analystRouter)
app.use("/api/relationships", relationshipRouter)
 
server.listen(process.env.PORT, () => {
  console.log(`[server] I'm up on port ${process.env.PORT}`);
});
 
 

 
 

