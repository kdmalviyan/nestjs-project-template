import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: '2BF4A1DDB23762C770A4DA30623F0BC8449D0E7CC3C29B7DA6E58F6C2CE40D9DB89CDB715CF580CEE2E7E7E03B6FA0E9EB13287985350F0546A9F145C806019F',
        });
    }

    async validate(payload: any) {
        return { id: payload.sub, username: payload.username };
    }
}