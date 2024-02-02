import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.searchParams.get('BYPASSFORM') === '1') {
    const url = req.nextUrl.clone();
    url.pathname = '/rooms';
    return NextResponse.rewrite(url);
  }
}
