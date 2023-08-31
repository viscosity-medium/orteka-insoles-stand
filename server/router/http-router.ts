import {Router} from "express";
import {httpController} from "../controller/http-controller";

const router: Router = Router();

router.get("/get-query-params", httpController.getQueryParams);
router.post("/send-data-to-controller", httpController.sendDataToController);

export {
    router
};
