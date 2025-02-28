import { SetMetadata } from '@nestjs/common'

export const Public = () => SetMetadata(process.env.NODE_ENV_PUBLIC_KEY, true)
