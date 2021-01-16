import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    imports: [UserModule, PassportModule,
        JwtModule.register({
            secret: "2BF4A1DDB23762C770A4DA30623F0BC8449D0E7CC3C29B7DA6E58F6C2CE40D9DB89CDB715CF580CEE2E7E7E03B6FA0E9EB13287985350F0546A9F145C806019F",
            signOptions: {
                expiresIn: '60s' // '50s', '2days', '10h', '7d'
            }
        })]
})
export class AuthModule { }
