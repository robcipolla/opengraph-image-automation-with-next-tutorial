import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div tw="h-[630px] w-[1200px] flex bg-blue-500 text-white text-5xl items-center justify-center">
        My fancy homepage open graph image
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
