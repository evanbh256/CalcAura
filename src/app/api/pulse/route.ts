import { runSystemPulse } from "@/lib/pulse";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await runSystemPulse();
    return NextResponse.json({ status: "ok", ...result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Pulse failed" }, { status: 500 });
  }
}
