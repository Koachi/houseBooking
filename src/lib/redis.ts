import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://sure-griffon-25505.upstash.io',
  token: process.env.REDIS_KEY!,
})
