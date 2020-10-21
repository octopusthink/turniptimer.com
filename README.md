# [turniptimer.com](https://turniptimer.com/)

This is the code powering the blog and website for [Turnip](https://turniptimer.com/), a time tracker for freelancers and small businesses.

## Development

### Getting started

turniptimer.com uses Gatsby. To run a local copy, clone the repo to your local machine, and start the Gatsby server:

```bash
npm start
```

That's it! You can now find the site at [localhost:8000](http://localhost:8000/).

All changes you make to front-end React code and styles will immediately be loaded. Any changes to `gatbsy-config.js` or `gatsby-node.js` require restarting the Gatsby server.

### Running tests

All pull requests must pass the linter rules to be merged into `master`. Tests are run against branches using GitHub Actions, but you can also run tests locally:

```bash
npm run lint
```

### Using the design system

turniptimer.com uses the [Nautilus](https://nautilus.octopusthink.com) design system under the hood. Since Nautilus is still very much under development, it's pulling from the latest changes made to the `master` GitHub branch, rather than the published version.

To pull the latest changes, uninstall and reinstall the Nautilus dependency:

```bash
npm uninstall nautilus && npm install --save octopusthink/nautilus
```

## License

Copyright (c) 2020 [Octopus Think Ltd](https://octopusthink.com/).

The source code is shared under a [Creative Commons 4.0 Attribution-ShareAlike (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0) license. Basically this means you can use stuff that we've written on here if you attribute us and release your content under the same license—even for commercial purposes!

See the [LICENSE.txt](LICENSE.txt) file for details.
