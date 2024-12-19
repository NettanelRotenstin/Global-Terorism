import { Router } from "express";
import { getQ4Data, getQ5Data, getQ6Data } from "../Controllers/relationshipController";

const router = Router();

router.get("/top-groups", getQ4Data);
router.get("//groups-by-year", getQ5Data);
router.get("/deadliest-regions", getQ6Data);

export default router;