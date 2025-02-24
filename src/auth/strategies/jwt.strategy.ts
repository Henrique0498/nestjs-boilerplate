import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { IS_PRIVATE_KEY } from 'src/services/keys'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: IS_PRIVATE_KEY,
    })
  }

  validate(payload: { sub: string; username: string }) {
    return { userId: payload.sub, username: payload.username }
  }
}
