import { salvarFilme, consultarFilmePorNome } from "../../repository/filmeRepository.js"; 
import { validarNovoFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";


export default async function salvarFilmeService(filmeObj) {
    // validacao de campos obrigatórios
    validarNovoFilme(filmeObj);

    // busca filmes com o mesmo nome
    // valida se existe filme com mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome);
    validarFilmeIgual(registros);

    // lógica de negócio
    let id = await salvarFilme(filmeObj);
    
    return id;
}

