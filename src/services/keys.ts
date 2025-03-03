import * as dotenv from 'dotenv'
dotenv.config()

if (!process.env.NODE_ENV_PUBLIC_KEY) {
  throw new Error('NODE_ENV_PUBLIC_KEY não está definido no .env')
}

export const CONFIG = {
  PUBLIC_KEY: process.env.NODE_ENV_PUBLIC_KEY,
}
