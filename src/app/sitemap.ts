import { MetadataRoute } from 'next'

/**
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 * @property url: The URL of the page. This URL must begin with the protocol (such as https) and end with a trailing slash, if your web server requires it. This value must be less than 2,048 characters.
 * @property lastModified: The date of last modification of the file. This date should be in W3C Datetime format. This format allows you to omit the time portion, if desired, and use YYYY-MM-DD.
 * @property changeFrequency: How frequently the page is likely to change. This value provides general information to search engines and may not correlate exactly to how often they crawl the page. Valid values are always, hourly, daily, weekly, monthly, yearly, and never. If data is dynamic and changes more frequently than hourly, it is recommended that you use the changeFreq tag set to always.
 * @property priority: The priority of this URL relative to other URLs on your site. Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites—it only lets the search engines know which pages you deem most important for the crawlers.
 */

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://localhost'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
    ]
}
