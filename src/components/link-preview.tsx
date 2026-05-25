async function fetchOGData(url: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 86400 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-bot/1.0)" },
    });
    clearTimeout(timeout);
    const html = await res.text();

    const getMeta = (prop: string) => {
      const m =
        html.match(
          new RegExp(
            `<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`,
            "i",
          ),
        ) ||
        html.match(
          new RegExp(
            `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${prop}["']`,
            "i",
          ),
        );
      return m?.[1] ?? null;
    };

    const title =
      getMeta("og:title") ??
      html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] ??
      null;
    const description = getMeta("og:description");
    const image = getMeta("og:image");
    const domain = new URL(url).hostname.replace(/^www\./, "");

    return { title: title?.trim() ?? null, description, image, domain };
  } catch {
    return null;
  }
}

export default async function LinkPreview({ url }: { url: string }) {
  const data = await fetchOGData(url);
  const domain = new URL(url).hostname.replace(/^www\./, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 mt-3 p-3 rounded-md border border-border bg-background hover:bg-muted transition-colors no-underline"
    >
      {data?.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={data.image}
          alt=""
          className="w-12 h-12 rounded object-cover shrink-0"
        />
      )}
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm truncate">
          {data?.title ?? domain}
        </span>
        {data?.description && (
          <span className="text-muted-foreground text-xs line-clamp-1">
            {data.description}
          </span>
        )}
        <span className="text-xs text-muted-foreground">{domain}</span>
      </div>
    </a>
  );
}
