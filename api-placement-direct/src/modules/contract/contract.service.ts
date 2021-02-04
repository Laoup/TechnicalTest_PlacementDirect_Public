import { Injectable, HttpService } from '@nestjs/common';

import { map } from 'rxjs/operators'

@Injectable()
export class ContractService {
  constructor(
    private httpService: HttpService
  ) {}

  async findAll() {
    return await this.httpService.get('http://my-json-server.typicode.com/Laoup/ApiOnline/contracts')
    .pipe(map(resp => resp.data));
  }

  async findById(id: number) {
    return await this.httpService.get(`http://my-json-server.typicode.com/Laoup/ApiOnline/contracts?id=${id}`)
    .pipe(map(resp => resp.data));
  }

  async findByIdUser(id: number) {
    return await this.httpService.get(`http://my-json-server.typicode.com/Laoup/ApiOnline/contracts_subscribe?id_user=${id}`)
    .pipe(map(resp => resp.data));
  }
}
