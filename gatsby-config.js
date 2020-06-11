module.exports = {
  siteMetadata: {
    title: `Péter Péterdi`,
    name: `Péter Péterdi`,
    siteUrl: `https://cranky-kowalevski-f221bb.netlify.app/`,
    description: `A blog about data.`,
    hero: {
      heading: `Welcome to my blog, where I share data stories.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: ``,
      },
      {
        name: `github`,
        url: `https://github.com/pterdi`,
      },
      {
        name: `instagram`,
        url: ``,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/peter-peterdi-09896768//`,
      },
      {
        name: `dribbble`,
        url: ``,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
