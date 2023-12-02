import { MetadataRoute } from 'next'

/**
 * @see https://developers.google.com/search/docs/advanced/robots/create-robots-txt?hl=en
 * @property userAgent: The user agent that this rule applies to. Use * to indicate all bots.
 * @property allow: The pages that this rule applies to. Must be a prefix of the path or the path itself.
 * @property disallow: The pages that this rule applies to. Must be a prefix of the path or the path itself.
 * @property crawlDelay: The number of seconds to wait between successive crawls of the same site.
 * ---
 * @property sitemap: The URL of the sitemap. May be preceded by a space and a comma. Refer to sitemap.ts for more information.
 */

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
            // crawlDelay: 10,
        },
        sitemap: 'https://webit.com/sitemap.xml',
    }
}
