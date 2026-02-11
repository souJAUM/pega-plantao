import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("pp_user")?.value;

  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const config = await prisma.userConfig.findUnique({
    where: { userId },
  });

  return NextResponse.json({ config });
}

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("pp_user")?.value;

  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const body = await req.json();

  const required = String(body.required ?? "");
  const interest = String(body.interest ?? "");
  const blocked = String(body.blocked ?? "");

  const updated = await prisma.userConfig.upsert({
    where: { userId },
    create: {
      userId,
      required,
      interest,
      blocked,
      responseText: "Eu pego.",
      responseMode: "GROUP",
      botEnabled: false,
    },
    update: {
      required,
      interest,
      blocked,
    },
  });

  return NextResponse.json({ config: updated });
}
