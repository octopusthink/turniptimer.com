/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const moment = require('moment');

const config = require('./data/SiteConfig.js');

let feedSettings;
const mapping = {};

const { enableBlog } = require('./src/utils/settings');

if (enableBlog) {
  feedSettings = {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map((edge) => {
              return {
                ...edge.node.fields,
                title: edge.node.fields.title,
                description: edge.node.html,
                date: edge.node.fields.date,
                url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                author: edge.node.fields.authors
                  .map((author) => {
                    return author.name;
                  })
                  .join(', '),
              };
            });
          },
          query: `
            {
              allMdx(
                sort: { fields: [fields___date], order: DESC }
                filter: {
                  fileAbsolutePath: { regex: "//content/blog/" }
                  fields: { timestamp: { lte: ${parseInt(moment.utc().format('X'), 10)} } }
                }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      authors {
                        name
                      }
                      date
                      slug
                      summary
                      title
                      tags {
                        name
                        summary
                      }
                    }
                    timeToRead
                  }
                }
              }
            }
          `,
          output: config.siteRss,
          title: config.blogTitleRSS || config.blogTitle,
          description: config.blogDescription,
          generator: 'Ghost Ship (https://github.com/octopusthink/ghost-ship)',
          site_url: config.siteUrl,
          language: config.language,
          copyright: config.copyright,
          custom_namespaces: {
            atom: 'http://www.w3.org/2005/Atom',
          },
          custom_elements: [
            {
              'atom:link': [
                {
                  _attr: {
                    href: `${config.siteUrl}${config.siteRss}`,
                    rel: 'self',
                    type: 'application/rss+xml',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  };

  if (config.enableBlogAuthors) {
    mapping['Mdx.fields.authors'] = 'AuthorsYaml';
  }

  if (config.enableBlogTags) {
    mapping['Mdx.fields.tags'] = 'TagsYaml';
  }
}

module.exports = {
  siteMetadata: {
    author: config.twitter,
    blogDescription: config.blogDescription,
    blogSummary: config.blogSummary,
    blogTitle: config.blogTitle,
    copyright: config.copyright,
    defaultImage: config.defaultImage,
    description: config.siteDescription,
    imageHeight: config.imageHeight,
    imageWidth: config.imageWidth,
    language: config.language,
    siteUrl: config.siteUrl,
    title: config.siteTitle,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/NautilusWrapper`),
      },
    },
    feedSettings,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `turniptimer.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Exclude specific pages or groups of pages using glob params
        // See: https://github.com/isaacs/minimatch
        excludes: [],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/MDXLayout'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
            },
          },
          { resolve: 'gatsby-remark-smartypants' },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
        ignore: ['**/*.js'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
        ignore: ['**/*.js'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Turnip Timer Website`,
        short_name: `Turnip Timer`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: './static/favicon.png',
        theme_color_in_head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
  ],
  mapping,
};
