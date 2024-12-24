import mongoose from "mongoose";
import { locationModel } from "../Models/locationModel";
import { orgaAndLocateModel } from "../Models/orgaAndLocateModel";
import { q1Model } from "../Models/q1Model";
import { q2Model } from "../Models/q2Model";
import { q3Model } from "../Models/q3Model";
import { q4Model } from "../Models/q4Model";
import { q5Model } from "../Models/q5Model";
import { q6Model } from "../Models/q6Model";
import { summaryModel } from "../Models/summaryModel";
import ILocation from "../Types/Interfaces/ILocation";
import IPost from "../Types/Interfaces/IPost";
import IPostAll from "../Types/Interfaces/IPostAll";
import { calcCasualties } from "../Utils/calculator";

export const postEvent = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const location = new locationModel({ lat, lon })
        await location.save()
        await postQ1(event)
        await postQ2(event,location)
        await postQ3(event)
        await postOrga(event)
        await postQ4(event)
        await postQ5(event)
        await postQ6(event)  
        await calcTopFive(event)
        await postSummery(event)
    } catch (error) {
        console.log(error)
    }
}
 

const postQ1 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ1 = await q1Model.findOne({ attackType })

        if (!extQ1) {
            const newQ1 = new q1Model({ attackType, numCasualties: await calcCasualties(nkill, nwound) })
            await newQ1.save()
        }
        else {
            extQ1.numCasualties = extQ1.numCasualties + calcCasualties(nkill, nwound)
            await extQ1.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}

const postQ2 = async (event: IPost, location: ILocation) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event
        const extQ2 = await q2Model.findOne({ region, country, city })
        if (!extQ2) {
            const newQ2 = new q2Model({ region, numCasualties: calcCasualties(nkill, nwound), country, city, locationArr: [location] })
            await newQ2.save()
        }
        else {
            extQ2.numCasualties = extQ2.numCasualties + calcCasualties(nkill, nwound)
            extQ2.locationArr.push(location)
            await extQ2.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}
const postQ3 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event

        const extQ3 = await q3Model.findOne({ year, month })
        if (!extQ3) {
            const newQ3 = new q3Model({ year, month,numEvent:1 })
            await newQ3.save()
        }
        else {
            extQ3.numEvent = extQ3.numEvent + 1
            await extQ3.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}
const postQ4 = async (event: IPost) => {
    try {
        const { region } = event;
        const exist = await q4Model.findOne({ region });
        if (!exist) {
          const myEvent = await orgaAndLocateModel.findOne({ region });
          const newForth = new q4Model({
            region,
            organizeTopFive: [myEvent!._id],
          });
          await newForth.save();
        } else {
          await calcTopFive(event);
        }
      } catch (err) {
        console.log(err);
      }
}
const postQ5 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event

        const extQ5 = await q5Model.findOne({ organizationName: organName, year })
        if (!extQ5) {
            const newQ5 = new q5Model({ organizationName: organName, year, numEvent: 1 })
            await newQ5.save()
        }
        else {
            extQ5.numEvent = extQ5.numEvent + 1
            await extQ5.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}
const postQ6 = async (event: IPost) => {
    try {
        const { attackType, nkill, nwound, region, country, city, lat, lon, organName, year, month } = event

        const extQ6 = await q6Model.findOne({ organName, region })
        if (!extQ6) {
            const newQ6 = new q6Model({ organName, region, numCasualties: calcCasualties(nkill, nwound) })
            await newQ6.save()
        }
        else {
            extQ6.numCasualties = extQ6.numCasualties + calcCasualties(nkill, nwound)
            await extQ6.save()
        }
        return
    } catch (error) {
        console.log(error)
    }
}

const postOrga = async (event: IPost) => {
    try {
        const { region, organName } = event;
        let existing: mongoose.AnyObject | null = await orgaAndLocateModel.findOne({
          region,
          organName,
        });
        if (!existing) {
          const newOrga = new orgaAndLocateModel({
            region,
            organName,
            numEvent: 1,
          });
          await newOrga.save();
        } else {
          existing.numEvent += 1;
          await existing.save();
        }
        console.log("oarg");
      } catch (error) {
        console.log(error);
      }
}

const postSummery = async (event:IPostAll ) => {
    try {
      const {
        attackType,
        city,
        country,
        eventid,
        iday,
        lat,
        lon,
        month,
        nkill,
        nperps,
        nwound,
        organName,
        region,
        summary,
        target1,
        targtype1_txt,
        weaptype1_txt,
        year,
      } = event;
      const exist = await summaryModel.find({ eventid });
      if (!exist) {
        const newAttack = new summaryModel({
          attackType,
          city,
          country,
          eventid,
          iday,
          lat,
          lon,
          month,
          nkill,
          nperps,
          nwound,
          organName,
          region,
          summary,
          target1,
          targtype1_txt,
          weaptype1_txt,
          year,
        });
        await newAttack.save();
      } else {
        throw new Error("attack with the event id already exist");
      }
    } catch (error) {
      console.log(error);
    }
  }
 
export const calcTopFive = async (event:IPost)=>{
    try {
        const { organName,region } = event
        let existing: any = await q4Model.findOne({ region })
            if (!existing) {
                 throw new Error()
            }
            else{
                let orgs = await orgaAndLocateModel.find({ region }).sort({ numEvent: -1 })
                existing.organizeTopFive = []
                existing.organizeTopFive.push(orgs[0]._id as any, orgs[1]._id as any, orgs[2]._id as any, orgs[3]._id as any, orgs[4]._id as any)
                await existing.save()
            }
    } catch (error) {
        
    }
}