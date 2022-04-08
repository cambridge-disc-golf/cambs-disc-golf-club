async function getPages() {
    const pages = await Object.entries(
        import.meta.globEager('/src/routes/**/index.svelte')
    );

    return pages
        .map(([path]) => path.slice("/src/routes/".length, -1 * "/index.svelte".length))
        .filter(page => page.length);
  }

export async function get() {
    const website = "https://www.cambridgediscgolf.uk";
    const pages = await getPages();

    return {
        headers: {
            'Content-Type': 'application/xml'
        },
        body: `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            <url>
                <loc>${website}</loc>
                <changefreq>weekly</changefreq>
                <priority>1.0</priority>
            </url>
            ${pages
                .map(page => `<url>
                <loc>${website}/${page}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>`).join('\n')}
        </urlset>
        `.trim()
    };
}
