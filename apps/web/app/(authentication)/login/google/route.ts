import { googleAuth } from "@/auth/lucia";
import * as context from "next/headers";

import type { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
	const [url, state] = await googleAuth.getAuthorizationUrl();

	context.cookies().set("google_oauth_state", state, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 60 * 60,
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString(),
		},
	});
};
