import { NextResponse } from "next/server";

export const maxDuration = 900;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json({
    id,
  });
}
