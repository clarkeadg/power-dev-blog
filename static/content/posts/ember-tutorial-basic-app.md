---
layout: post
author: Ghost
title: Getting Started with Ember
date: 2019-05-22T07:00:47.149Z
image: ../img/testimg1.jpg
tags:
  - Tutorials
---

For this tutorial we'll build a basic site with **Ember JS** and **Bootstrap**.

Here's links to both a working demo site and the final source code on Github.

- [Demo Site](https://clarkeanimation.com/apps/ember/basic/)
- [Source Code](https://www.github.com/clarkeadg)

### Prequisites
You should have these installed before beginning.

1. [Node JS](https://nodejs.org)

### Install Ember JS if you don't have it installed already

```sh
npm install -g ember-cli

```

---

### Create a new Ember App

```sh
ember new basic-app
```

---

### Navigate to the app folder and start the local development server

```sh
cd basic-app
ember serve
```

You should have a running Ember JS app 👍

It will be running at: [http://localhost:4200](http://localhost:4200)

You should see a welcome page that looks like this:

![](https://guides.emberjs.com/images/ember-cli/default-welcome-page.png)

> **Note:** You may use the command `ember serve` to start your development server and press **ctrl-c** to stop the server.

---

### Install packages

We will need to install some npm packages.  Stop the server by pressing **crtl-c**.

Then install these npm packages

1. Bootstrap
1. Font Awesome Icons

```sh
npm install --save-dev bootstrap @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons
```

Next, we will install these Ember Addons

1. Ember Sass
2. Ember Font Awesome
1. Ember JS Cookie

```sh
ember install ember-cli-sass @fortawesome/ember-fontawesome ember-cli-js-cookie
```
---

### Edit index file

- Open *app/index.html* and change the title

```html
<title>Basic App</title>
```
---

### Create SASS file

- Rename *app/styles.css* to *app/styles.scss*

- Open *app/styles.scss* and replace the contents with the following


```sass
// Bootstrap variables
$font-family-sans-serif: "Arial";
$font-family-monospace:  "Arial";
$enable-shadows: true;
$enable-gradients: true;
$font-size-base: 0.9rem;

$grid-breakpoints: (
  "xs": 0,
  "sm": 480px,
  "md": 769px,
  "lg": 1025px,
  "xl": 1400px
);

$container-max-widths: (
  "sm": 100%,
  "md": 100%,
  "lg": 960px,
  "xl": 1310px
);

// Remove borders on focus on links and buttons
:focus { outline: none !important; box-shadow: none !important; }

// position utils
.position-absolute {
  &.top { top: 0; }
  &.bottom { bottom: 0; }
  &.left { left: 0; }
  &.right { right: 0; }
}

// prevent images, iframes, and videos from going offscreen
img, iframe, video { max-width: 100%; }

// prevent rows from going offscreen
.row { max-width: 100%; margin: 0 auto; }

// remove underline from links
a,a:hover { text-decoration: none; }

@import 'node_modules/bootstrap/scss/bootstrap.scss';

$footerHeight: "80px";

.layout {
  position: relative;
  min-height: 100vh;
  padding-bottom: $footerHeight;
}

footer {
  height: $footerHeight;
  position: absolute;
  bottom: 0;
  left: 0;              
}
```
---

### Add Bootstrap javascript

- Open *ember-cli-build.js* and replace the contents with the following


```javascript
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import("node_modules/bootstrap/dist/js/bootstrap.bundle.js");

  return app.toTree();
};
```
---

### Edit application template

- Open *app/templates/application* and replace the contents with the following

```hbs
<div class="layout">

  {{! PAGE CONTENT }}
  {{outlet}}  

  {{! FOOTER }}
  <footer class="border-top bg-dark py-3 container-fluid">
    <div class="container px-0">
      <div class="row align-items-center">
        <div class="col">
          <div class="d-flex justify-content-start align-items-center">
            <span class="text-light">Basic App</span>
          </div>
        </div>
        <div class="col p-0">
          <div class="d-flex justify-content-end">
            <nav class="p-0 navbar navbar-expand navbar-dark">
              <ul class="align-items-center navbar-nav">
                <li class="nav-item">
                  <a target="_blank" rel="noopener" href="https://www.github.com/clarkeadg" class="py-0 nav-link">
                    {{fa-icon "github" prefix="fab" size="2x"}}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>

</div>
```
---

### Create index route

- Type the following to generate a new route called *index*

```sh
ember g route index
```

- Open *app/templates/index.hbs* and replace the contents with the following 

```hbs
<main>
    
  {{! TOP }}
  <div class="mb-0 pt-5 pb-0 text-center rounded-0 jumbotron bg-white">
    <div class="pt-5 row justify-content-md-center">
      <div class="col-sm-12 col-md-6 col-md-auto">
        
        {{! TITLE }}
        <h1 class="display-4 font-weight-bold">
          <div>Hello</div>
          <small>This is a basic app</small>
        </h1>  

      </div>
    </div>
  </div>

</main>
```
---

That's it 👍

- Type `ember serve` to run the app.

Your app will be running at: [http://localhost:4200](http://localhost:4200)

---
- [Demo Site](https://clarkeanimation.com/apps/ember/basic/)
- [Source Code](https://www.github.com/clarkeadg)
