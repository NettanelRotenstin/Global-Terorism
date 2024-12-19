import IPost from "../Types/Interfaces/IPost"
import { deleteEvent } from "./deleteService"
import { postEvent } from "./postService"

export const updateEvent = async (event: IPost) => {
    try {
        await deleteEvent(event)
        await postEvent(event)
    } catch (error) {
        console.log(error)
    }
}