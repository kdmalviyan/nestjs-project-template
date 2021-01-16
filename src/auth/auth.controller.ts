import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('/logout')
    @UseGuards(AuthGuard('jwt'))
    logout(@Request() req) {
        return req.user;
    }
}
