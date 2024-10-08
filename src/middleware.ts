import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import { NextRequest, NextResponse } from "next/server";
 
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
 
const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
})
 
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, "1 d"),
});
 
export async function middleware(req: NextRequest, res: NextResponse) {
    const xForwardedList = req.headers.get('x-forwarded-for').split(',')
    const original_uri = req.headers.get('x-original-uri') || ''
    const identifier = original_uri + (req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || "api")
    const result = await ratelimit.limit(identifier as string);

    const newHeaders = new Headers(req.headers)
    newHeaders.set('X-RateLimit-Limit', result.limit.toString())
    newHeaders.set('X-RateLimit-Remaining', result.remaining.toString())

    if (!result.success) {
      return NextResponse.json({ error: { errorMessage: "Please try again later."}, title: "You've reached daily maximum of 3 messages", rateLimitState: result }, { status: 429 });
    }

    return NextResponse.next({
      request: {
        headers: newHeaders
      }
    })
}

export const config = {
  matcher: ['/api/sendForm', '/api/sendValueForm'],
}
