export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}feedback`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Proxy Error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Proxy Error", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
