import { Request, Response } from "express";
import { getQ1Service, getQ2Service, getQ3Service } from "../Services/getDataFromDB";

 

export const getQ1Data = async (req: Request,res: Response,) => {
  try {
    const result = await getQ1Service();
    res.json(result);
  } catch (err) {
    console.error("Can't get", err);
  }
}

export const getQ2Data = async (req: Request,res: Response,) => {
  try {
    const result = await getQ2Service()
    res.json(result)
  } catch (err) {
    console.error("Can't get", err)
  }
};

export const getQ3Data = async (req: Request,res: Response,) => {
  try {
    const result = await getQ3Service()
    res.json(result)
  } catch (err) {
    console.error("Can't get", err)
  }
};