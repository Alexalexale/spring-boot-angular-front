import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { Injectable } from "@angular/core";
import { ClienteDTO } from "../models/cliente.dto";

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient) { }

    findAllRiscos() {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/riscos`);
    }

    insert(cliente: ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            cliente,
            { observe: 'response', responseType: 'text' }
        );
    }

}