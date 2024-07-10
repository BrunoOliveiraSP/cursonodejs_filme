import { salvarFilme } from "../repository/filmeRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/filme', async (req, resp) => {
    let filmeObj = req.body;

    let id = await salvarFilme(filmeObj);

    resp.send({
        id: id
    })
})




export default endpoints;