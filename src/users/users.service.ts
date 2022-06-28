import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'password',
    },
    {
      userId: 2,
      username: 'demo',
      password: '1111',
    },
  ];

  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authSerivice: AuthService,
  ) {}

  async findOne(users: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === users);
  }

  async generateToken() {
    return this.authSerivice.generateToken();
  }
}
