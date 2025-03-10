import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalGuards(new JwtAuthGuard(new Reflector()))

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
