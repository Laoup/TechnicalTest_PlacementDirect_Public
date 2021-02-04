import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = {
      email,
      password
    };

    const foundUser = await this.userService.identifyOne(user);
    if (foundUser !== null)
      return (foundUser);
    return (null);
  }

  async login(foundUser: any) {
    const payload = {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email
    };

    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
