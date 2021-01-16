import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/schema/user.schema';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) {
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user: User = await this.userService.findOne({ username: username });
        if (user && user.password === password) {
            const result = {
                id: user._id,
                username: user.username
            };
            return result;
        }
        return null;
    }
}
