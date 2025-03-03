import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { CONFIG } from 'src/services/keys'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }

  canActivate(context: ExecutionContext) {
    const PUBLIC_KEY = CONFIG.PUBLIC_KEY
    // const PUBLIC_KEY = 'isPublic'

    // Debug para verificar a chave usada
    console.log('PUBLIC_KEY usado:', PUBLIC_KEY)

    // Debug para verificar se a metadata está presente
    console.log(
      'Handler Metadata:',
      this.reflector.get(PUBLIC_KEY, context.getHandler()),
    )
    console.log(
      'Class Metadata:',
      this.reflector.get(PUBLIC_KEY, context.getClass()),
    )

    // Verifica se a rota tem o decorator @Public()
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    console.log('isPublic retornado:', isPublic)

    if (isPublic) {
      return true
    }

    return super.canActivate(context)
  }
}
