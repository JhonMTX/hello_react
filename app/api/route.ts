import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const cookiesStore = cookies();
  const { key } = await req.json();

  if (cookiesStore.get('sessionKey')) return new Response('Already have a session key', { status: 200 });
  cookiesStore.set('sessionKey', key, { httpOnly: true, secure: true, sameSite: 'strict' });

  return NextResponse.json({ message: "Vacation Details Saved", success: true });

}

//{"resort":"SMB","checkIn":"2023-08-24","checkOut":"2023-08-30","includeFlights":"no","gateway":"ABE","flightType":"economy"}