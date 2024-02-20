import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-glad-condor-31578.upstash.io',
  token: process.env.REDIS_KEY!,
})
