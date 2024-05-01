import { slugToTitle } from "@/utils/slug";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const url = new URL(request.url);

  let slug = url.pathname.split("/").pop();
  slug = slug?.split(".")[0];

  if (slug === undefined) {
    return new Response("Not found", { status: 404 });
  }

  const title = slugToTitle(slug);

  return new ImageResponse(
    (
      <div tw="h-[630px] w-[1200px] flex bg-blue-500 text-white text-5xl items-center justify-center">
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
