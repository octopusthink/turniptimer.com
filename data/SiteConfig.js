const config = {
  // Set to your site's language/locale.
  language: 'en-GB',
  // Site title.
  siteTitle: 'Turnip: A timer for freelancers',
  // Short site title for homescreen (PWA/Progressive Web Apps).
  // Staying under 12 characters will prevent any truncation on phone screens.
  siteTitleShort: 'Turnip',
  // Alternative site title for SEO.
  siteTitleAlt: 'Turnip: The timer for freelancers.',
  // Logo used for SEO and manifest.
  siteLogo: '/logos/logo-1024.png',
  // Domain of your website without pathPrefix.
  siteUrl: 'https://turniptimer.com',
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  pathPrefix: '/',
  // Website description used for RSS feeds/meta description tag. 170 char.
  siteDescription:
    'Turnip Timer is a time tracker for freelancers. Turnip sits in your menu bar, so you’ll always know at a glance if your timer is running.',
  // Path to the RSS file.
  siteRss: '/blog/rss.xml',
  twitter: '@octopusthinks',
  // Copyright string for the footer of the website and RSS feed.
  copyright: `Made with ❤️ by Octopus Think`,
  // Fallback image used when sharing to social sites.
  defaultImage: '/og-images/default.png',
  imageHeight: '630',
  imageWidth: '1200',

  /* ------------ Blog Settings ------------ */
  blogTitle: 'Turnip Blog',
  blogDescription:
    'Turnip Timer is a time tracker for freelancers. Turnip sits in your menu bar, so you’ll always know at a glance if your timer is running.',
  blogSummary: 'The blog for Turnip.',
  blogUrl: '/blog/',
  dateFormat: 'D MMMM YYYY',
  enableBlogAuthors: true,
  enableBlogTags: true,
  postsPerPage: 10,
  // When enabled this prefixes slugs with `date` data for the node, if set.
  // `useDatesInSlugs: false` -> `/blog/my-post/`
  // `useDatesInSlugs: true`  -> `/blog/2019-05-09-my-post/`
  useDatesInSlugs: true,

  /* ------------ Matamo Tracking Settings ------------ */
  matomoOptions: {
    siteId: 10,
    matomoUrl: 'https://analytics.octopusth.ink',
    siteUrl: 'https://turniptimer.com',
    requireConsent: false,
    // Removes the need for cookie notices and is less creepy! :-)
    disableCookies: true,
  },

  /* ------------ Visual Appearance Settings ------------ */
  // Replace this with a Nautilus Theme object.
  // See: https://nautilus.octopusthink.com
  // nautilusTheme: require('./theme'),
  // Site width is total width of your site including headers, footers, and backgrounds, expressed in a value CSS understands.
  siteWidth: '128rem',
  // Content width is the width of content (ie, paragraphs and blocks of text), expressed in a CSS value.
  contentWidth: '64rem',
};

/* ------------ You shouldn't need to edit this! ------------ */
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
