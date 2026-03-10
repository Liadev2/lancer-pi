import { NextRequest, NextResponse } from 'next/server';

const PI_API_KEY = process.env.PI_SERVER_API_KEY!;

export async function POST(req: NextRequest) {
  const { paymentId } = await req.json();
  const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${PI_API_KEY}`, 'Content-Type': 'application/json' },
  });
  return NextResponse.json(await response.json());
}