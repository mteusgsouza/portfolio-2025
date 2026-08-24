import { geolocation } from '@vercel/functions/headers'
import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, LOCALE_COOKIE, type Locale } from './i18n/locale'

const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  BR: 'pt',
  JP: 'ja',
}

const ONE_YEAR = 60 * 60 * 24 * 365

export function middleware(request: NextRequest) {
  if (request.cookies.has(LOCALE_COOKIE)) {
    return NextResponse.next()
  }

  const { country } = geolocation(request)
  const locale = (country && COUNTRY_TO_LOCALE[country]) || defaultLocale

  const response = NextResponse.next()
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: ONE_YEAR,
    path: '/',
    sameSite: 'lax',
  })
  return response
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
