import { Controller, Get, Request, Body, UseGuards } from '@nestjs/common';
import { ContractService } from './contract.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { map } from 'rxjs/operators'

@Controller('contract')
export class ContractController {
  constructor(
    private contractService: ContractService
  ) {}

  @Get('all')
  async getAllContract() {
    return this.contractService.findAll();
  }

  @Get('id')
  getContractById(@Body() body) {
    return this.contractService.findById(body.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('id-user')
  getContractByIdUser(@Request() req) {
    return this.contractService.findByIdUser(req.user.id);
  }
}
