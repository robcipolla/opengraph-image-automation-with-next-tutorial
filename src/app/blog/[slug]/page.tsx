import { slugToTitle } from "@/utils/slug";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params, searchParams }: Props): Metadata {
  return {
    title: slugToTitle(params.slug),
    openGraph: {
      images: [
        {
          url: `https://example.com/blog/${params.slug}/og/${params.slug}.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>Blog Post - {params.slug}</h1>
    </div>
  );
}
