import { Controller, Get, Post, Patch, Body, Res, Request, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserObject } from '../../helpers/types/userObject.types';
import { User } from './models/user.model';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Get('all')
  getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('subscribe')
  async addOneUser(@Body() body, @Res() res) {
    try {
      const hash = await this.userService.hashPassword(body.password);

      let myUser = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: hash
      };

      await this.userService.createOne(myUser)

      res.status(200).send("Nouvel utilisateur créer.");
    }
    catch (e) {
      console.error("Il y a eu une erreur: /user/inscription - POST");
      console.error(e)
      res.status(400).send(e);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    //This line return a jwt token if connexion is ok.
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return (req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(@Request() req, @Body() body) {
    const updateInfo = {
      email: body.email,
    }
    await this.userService.patchOne(req, updateInfo);
    //return (req.user);
  }

}

/*  @Post('connexion')
  async findUserConnexion(@Body() body, @Res() res) {
    try {
      let myUser = {
        email: body.email,
        password: body.password
      };

      let result = await this.userService.identifyOne(myUser)
      if (result !== null)
        res.status(200).send("Utilisateur authentifié");
      else
        res.status(400).send("L'utilisateur n'existe pas ou le couple email/mot-de-passe ne correspond pas.");
    }
    catch (e) {
      console.error("Il y a eu une erreur: /user/connexion - POST");
      console.error(e)
      res.status(400).send(e);
    }
  }
*/
