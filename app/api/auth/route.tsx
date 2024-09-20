export async function POST(request: Request) {
  const { user, password } = await request.json();
  const USER = process.env.NEXT_USER_NAME;
  const PW = process.env.USER_PASSWORD;
  const TOKEN = process.env.NEXT_TOKEN;

  const auth = { auth: user === USER && password === PW };

  return Response.json({ authorized: auth, token: TOKEN });
}
{
}

export async function GET(request: Request) {
  return Response.json({ token: process.env.NEXT_TOKEN });
}
