import { NextResponse } from "next/server";
import { getList, toggleInList } from "./data";

const USER_ID = "bob";

export async function GET() {
  return NextResponse.json({ ids: getList(USER_ID) });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const productId = body?.productId;
  if (!productId || typeof productId !== "string") {
    return NextResponse.json({ error: "productId required" }, { status: 400 });
  }

  toggleInList(USER_ID, productId);
  return NextResponse.json({ ok: true });
}
