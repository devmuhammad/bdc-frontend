# BUREAU DE CHANGE (FRONTEND)

> BUREAU DE CHANGE DOCUMENTATION (BDC) FOREX TRADING MANAGER

1.1 Purpose of Document:

This document is a documentation of the above-mentioned software application developed for Comsoft Ltd in 2018.

1.2 Application Overview:

BDC is a FX trading management platform for “Bureau de change” operators to record and manage inflow and outflow of currencies and exchanges accurately.

1.3 Scope:

The scope of this development was to design the front end (UI/UX) & backend implementation of the BDC application. The system was built on the following modules:
• Authentication
• Dashboard & reports
• Sales & purchases
• User Manager & Settings

1.4 Tools:

BDC front-end was developed with VueJs 2. Using the Bulma CSS.
Other dependencies & plugins can be found in the package.json file. It was developed using the IDE - Visual studio code.

1.5 Coding Structure:

The front-end code was structured in line with the standard. A “src” tree parent folder with “layout”, “views” & “components”.

1.6 Build Commands:

Start: “npm start”
Build: “npm build” – dist file can be found in the project root folder.

1.7 Repository:

Url: https://github.com/devmuhammad/bdc-frontend.git
Branch: master

1.8 API/Endpoints:

Production: http://BaseURL/cabsolbdc/api/v1/ Development: http://localhost:3000/cabsolbdc/api/v1/
   

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
