import { Router } from "express";
import { getQ1Data, getQ2Data, getQ3Data } from "../Controllers/analistisController";

const router = Router();

router.get("/deadliest-attack-types", getQ1Data);
router.get("/highest-casualty-regions", getQ2Data);
router.get("/incident-trends", getQ3Data);

export default router;