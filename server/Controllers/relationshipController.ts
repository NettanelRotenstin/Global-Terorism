import { Request, Response } from "express";
import { getQ4ServiceAll, getQ4ServiceArea, getQ5ByOrgService, getQ5ByYearService, getQ5Service, getQ6ServiceArea } from "../Services/getDataFromDB";

export const getQ4Data = async (req: Request,res: Response,) => {
    try {
      const result = await getQ4ServiceAll()
      res.json(result)
    } catch (err) {
      console.error("Can't get", err)
    }
  };
  
  export const getQ5ByRegion = async (req: Request,res: Response,) => {
    try {
      const result = await getQ4ServiceArea(req.body.reg);
      res.json(result);
    } catch (err) {
      console.error("Can't get", err)
    }
  };
  
  export const getQ5Data = async (req: Request,res: Response,) => {
    try {
      const result = await getQ5Service()
      res.json(result);
    } catch (err) {
      console.error("Can't get", err)
    }
  }
  
  export const getQ5ByOrg = async (req: Request,res: Response,) => {
    try {
      const result = await getQ5ByOrgService(req.body.oarg)
      res.json(result)
    } catch (err) {
      console.error("Can't get", err)
    }
  }
  
  export const getQ5ByYear = async (req: Request,res: Response) => {
    try {
      const result = await getQ5ByYearService(req.body.year)
      res.json(result)
    } catch (err) {
      console.error("Can't get expenses data", err)
    }
  };
  
  export const getQ6Data = async (req: Request,res: Response) => {
    try {
      const result = await getQ6ServiceArea(req.body.org)
      res.json(result)
    } catch (err) {
      console.error("Can't get expenses data", err)
    }
  };