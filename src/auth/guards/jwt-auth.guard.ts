import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    // Verifica se a rota tem o decorator @Public()
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      process.env.NODE_ENV_PUBLIC_KEY,
      [context.getHandler(), context.getClass()],
    )

    console.log('teste',isPublic)

    if (isPublic) {
      return true
    }

    return super.canActivate(context)
  }
}
