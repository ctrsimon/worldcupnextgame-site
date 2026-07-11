import { revalidatePath } from "next/cache";
import { env } from "@/lib/env";
export async function POST(request: Request) { const secret = request.headers.get("x-revalidation-secret"); if (!env.REVALIDATION_SECRET || secret !== env.REVALIDATION_SECRET) return Response.json({ error: "Unauthorized" }, { status: 401 }); revalidatePath("/"); revalidatePath("/schedule"); return Response.json({ revalidated: true, now: Date.now() }); }
