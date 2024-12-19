import { Socket } from "socket.io";
import IPost from "../Types/Interfaces/IPost";
import { postEvent } from "../Services/postService";
import { updateEvent } from "../Services/updateService";
import { io } from "..";
import { getQ1Service } from "../Services/getDataFromDB";

export const handelSocketConnection = async (client: Socket) => {
    
    //when client connect he will get: 1)kind of attacks and their damage
    client.emit('kind-attacks',await getQ1Service())
    
    //when client create event all clients will get data back
    client.on("post-event", async (event: IPost) => {
        await postEvent(event)
        io.emit('read-event')
    })
    
    //when client update event all cliets will get data back
    client.on("update-event", async (event: IPost) => {
        await updateEvent(event)
        io.emit('read-event')
    })


}