import { NextRequest, NextResponse } from 'next/server'
import { analytics } from './utils/analytics'

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      }),
      analytics.track('export', {
        page: '/analytics',
      })
    } catch (err) {
      // fail silently to not affect request
      console.error(err)
    }
  }

  return NextResponse.next()
}

export const matcher = {
  matcher: [

  '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}