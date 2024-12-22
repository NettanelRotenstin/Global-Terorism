import { Socket } from "socket.io";
import IPost from "../Types/Interfaces/IPost";
import { postEvent } from "../Services/postService";
import { updateEvent } from "../Services/updateService";
import { io } from "..";
import { allLocations, getQ1Service, getQ2ByCityService, getQ2ByContryService, getQ2ByRegionService, getQ2Service, getQ3By10YearsService, getQ3By5YearsService, getQ3ByYearRangeService, getQ3ByYearService, getQ3Service, getQ4ServiceAll, getQ4ServiceArea, getQ5ByOrgService, getQ5ByYearService, getQ6ServiceArea } from "../Services/getDataFromDB";
import { deleteEvent } from "../Services/deleteService";
import { getQ3Data } from "../Controllers/analistisController";
import { getQ5ByYear } from "../Controllers/relationshipController";

export const handelSocketConnection = async (client: Socket) => {

    client.emit('all-locations', await allLocations())
    //when client connect he will get: 1)kind of attacks and their damage
    client.emit('kind-attacks', await getQ1Service())

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

    client.on('delete-event', async (event: IPost) => {
        await deleteEvent(event)
        io.emit('read-event')
    })

    client.on('kind-attacks', async () => {
        client.emit('kind-attack', await getQ1Service())
    })

    client.on('all-most-hurts', async () => {
        client.emit('all-most-hurts', await getQ2Service())
    })

    client.on('city-most-hurts', async (city: string) => {
        client.emit('city-most-hurts', await getQ2ByCityService(city))
    })

    client.on('country-most-hurts', async (country: string) => {
        client.emit('country-most-hurts', await getQ2ByContryService(country))
    })

    client.on('region-most-hurts', async (region: string) => {
        client.emit('region-most-hurts', await getQ2ByRegionService(region))
    })

    client.on('all-trend', async () => {
        client.emit('all-trend', await getQ3Service())
    })

    client.on('year-trend', async (year: string) => {
        client.emit('year-trend', await getQ3ByYearService(year))
    })

    client.on('year-range-trend', async (yearStart: string, yearEnd: string) => {
        client.emit('year-range-trend', await getQ3ByYearRangeService(yearStart, yearEnd))
    })

    client.on('5year-trend', async () => {
        client.emit('5year-trend', await getQ3By5YearsService())
    })

    client.on('10year-trend', async () => {
        client.emit('10year-trend', await getQ3By10YearsService())
    })

    client.on('all-region-topFive', async () => {
        client.emit('all-region-topFive', await getQ4ServiceAll())
    })

    client.on('region-topFive', async (region: string) => {
        client.emit('region-topFive', await getQ4ServiceArea(region))
    })

    client.on('events-year', async (year: number) => {
        client.emit('events-year', await getQ5ByYearService(year))
    })

    client.on('org-event', async (org: string) => {
        client.emit('org-event', await getQ5ByOrgService(org))
    })

    client.on('org-most-events-area', async (org: string) => {
        client.emit('org-most-events-area', await getQ6ServiceArea(org))
    })
}