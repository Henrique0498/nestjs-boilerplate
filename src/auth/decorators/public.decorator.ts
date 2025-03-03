import { SetMetadata } from '@nestjs/common'
import { CONFIG } from 'src/services/keys'

export const Public = () => SetMetadata(CONFIG.PUBLIC_KEY, true)
// export const Public = () => SetMetadata('isPublic', true)
