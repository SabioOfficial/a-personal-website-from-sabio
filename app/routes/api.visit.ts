import type { Route } from "./+types/home";

async function upstash(...cmd: string[]): Promise<number> {
  const res = await fetch(process.env.UPSTASH_REDIS_REST_URL!, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
    body: JSON.stringify(cmd),
  });
  if (!res.ok) throw new Error(`upstash ${res.status}`);
  const { result } = await res.json();
  return Number(result ?? 0);
}

const reply = (count: number | null, status = 200) => Response.json({ count }, { status, headers: { "Cache-Control": "no-store" } });

export async function loader() {
  try {
    return reply(await upstash("GET", "visits:home"));
  } catch (err) {
    console.warn("visit read failed", err);
    return reply(null, 502);
  }
}

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") return reply(null, 405);
  try {
    return reply(await upstash("INCR", "visits:home"));
  } catch (err) {
    console.warn("visit incr failed", err);
    return reply(null, 502)
  }
}
