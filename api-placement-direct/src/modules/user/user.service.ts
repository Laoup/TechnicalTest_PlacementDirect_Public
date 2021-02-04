import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserObject } from '../../helpers/types/userObject.types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  };

  findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  };

  async patchOne(req, updateInfo) {
    await this.userModel.update({
      email: updateInfo.email,
    },
    {
      where: {
        id: req.user.id
      },
    });
  };

  async createOne(user) {
    await this.userModel.create<User>(user);
  }

  async identifyOne(user): Promise<User> {
    const foundUser = await this.userModel.findOne({
      where: {
        email: user.email
      },
      raw: true
    });

    if (foundUser !== null)
      {
        let compareHash = await bcrypt.compare(user.password, foundUser.password);
        if (compareHash === false)
        return (null);
      }
    return (foundUser);
  }

  /*
  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
  */

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
