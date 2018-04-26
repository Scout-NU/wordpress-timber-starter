# Wordpress Starter Theme

This is a starter project to create a new Wordpress theme using Timber, SCSS, and jQuery.

## Table of Contents

* [Setup](#setup)
* [Development](#development)
* [Tips](#tips)
* [Directory Structure](#directory-structure)
* [Maintainers](#maintainers)
* [Code of Conduct](#code-of-conduct)
* [Contributing](#contributing)
* [License](#license)
* [About Scout](#about-scout)

## Setup

1. [Install Docker](#installing-docker)
1. `git clone git@github.com:Scout-NU/wordpress-timber-starter.git my-project`
1. `cd my-project`
1. `npm install`
1. If using the rsync deploy script, update deploy destination and site url in [deploy.sh](/bin/desploy.sh)
1. Search the entire project for `CHANGE_THIS`, you'll find places to change your MySQL password, database name, theme name, project name, and author name. Replace all of these with the relevant information.
1. You should be all set!

### Installing Docker

1. Install [Docker](https://docs.docker.com/docker-for-mac/install/) and open it. Once you open it for the first time it should automatically show up in the menu bar. Docker is super lightweight so you can just leave the app open in the background
1. In your terminal inside of the `my-project` directory, run `docker-compose up -d`
1. The first time you do this it'll take a bit because it has to download the MySQL and Wordpress files for the first time
1. On subsequent runs, just run `docker-compose stop` to stop the servers and `docker-compose start` to start them again.
1. This starts Docker in detached mode (`-d`). To kill the process run `docker-compose down`. **This will remove persisted data. Only do this when you're cleaning up a project.**
1. That's it!! Docker should be running on `localhost:8000`

### Using Gulp

In order to see the theme you have to run `gulp build` first then `gulp watch`, because wordpress is looking for the compiled version of the theme.

`gulp build`: Runs the gulp task to create the build folder that holds the theme

`gulp watch`: Runs the gulp task that watches your files and automatically reloads your browser

`gulp watch` should automatically open `localhost:3000` in your browser. Follow the steps to set up Wordpress there

### How It Works

Docker is running on port 8000, however if you'd like the niceties of browsersync's hot-reloading and all of that nonsense, use the `localhost:3000` URL. Technically it's actually browsersync running on `localhost:3000` and that proxies the Docker container exposed on port 8000. Just use 3000, make your life easy!

### Getting The Theme Working with Wordpress

We've got the theme building, but because it's not pure Wordpress/PHP we need to install a plugin before we activate the theme:

* Navigate to `localhost:3000/wp-admin` and login with your wordpress account
* `Plugins > Add New`, and search for `Timber`. Make sure to hit `Activate` after hitting `Install Now`
* Then activate the theme: `Appearance > My Theme`

[Timber Docs](https://timber.github.io/docs/)

[Twig Docs](https://twig.symfony.com/doc/2.x/)

## Development

1. `npm start`
1. 💸 money 💸

## Tips

* Make sure that whenever you pull from the repository you run `gulp build`
* If links aren't working login to the `wp-admin` and under settings/permalinks check and uncheck post name option and save (it resets the redirect for wordpress)

## Directory Structure

```
wordpress-timber-starter
│   README.md
│   gulpconfig.js  -- Defines all gulp paths & configurations used in
│                     gulpfile.js directory
│   package.json   -- Defines all the dependencies needed that are installed
│                     using `npm install`
│   docker-compose.yml   -- The Dockerfile to get the WP server up and running
│
└───gulpfile.js
│   │   index.js   -- Main JS file
│   │
│   ├───tasks      -- holds all the different gulp tasks
│   │   ├───browsersync.js
│   │   ├───images.js
│   │   ├───main.js
│   │   ├───scripts.js
│   │   ├───styles.js
│   │   ├───theme.js
│   │   ├───utils.js
│   │___├───watch.js
│
└───src
│   │   *.php          -- main HTML page
│   │───inc            -- other includes
│   │───images         -- all the images that aren't on wordpress
│   │───js             -- holds all JavaScript files
│   │───scss           -- directory with sass files and fonts
|   |   |───component  -- global components (footer, nav)
|   |   |───page       -- pagespecific style sheets
|   |───fonts          -- fonts and iconfont files
│   │
│   ├───templates   -- holds the twig files
```

## Maintainers

#### Adam Markon

_Email_: [amarkon895@gmail.com](mailto:amarkon895@gmail.com)

_Twitter_: [@amarkon88](https://twitter.com/amarkon88)

## Code of Conduct

Scout strives to provide a welcoming, inclusive environment for all users, period. To hold ourselves accountable to that mission, Scout has a strictly-enforced [code of conduct](/CODE_OF_CONDUCT.md). Violating those rules will result in removal from the Scout organization, and potentially being banned from contributing to our projects.

## Contributing

We welcome all contributions to our projects! Filing bugs, feature requests, code changes, docs changes, or anything else you'd like to contribute are all more than welcome! More information about contributing to Scout projects can be found in our [contributors' guide](/CONTRIBUTING.md)!

## License

All Scout libraries are [ISC-licensed](/LICENSE). tl;dr: you can use this code however you'd like, just please attribute us appropriately!

## About Scout

<p  align="center">
  <img src="https://web.northeastern.edu/scout/wp-content/themes/scout/images/logo.png" alt="Scout Logo" />
</p>

Scout is Northeastern University's student-led design studio. The Studio has about 45 members selected via interview and application processes to select the university's best talent. Each semester the studio produces design and development assets for four ventures. Check out our [portfolio](https://web.northeastern.edu/scout/portfolio) for some past projects!
