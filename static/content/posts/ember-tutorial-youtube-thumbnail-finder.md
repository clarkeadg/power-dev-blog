---
layout: post
author: Ghost
title: Build a Youtube Thumbnail Finder with Ember
date: 2019-05-22T07:11:47.149Z
image: ../img/callum-shaw-555357-unsplash.jpg
tags:
  - Tutorials
---
For this tutorial we'll build a site that finds **Youtube thumbails** with **Ember JS** and **Bootstrap**.

Here's links to both a working demo site and the final source code on Github.

- [Demo Site](https://clarkeanimation.com/apps/ember/youtube-thumbnails/)
- [Source Code](https://www.github.com/clarkeadg)

### Prequisites
Follow the *Getting Started with Ember* instructions to build a basic **Ember** app

- [Getting Started with Ember](/posts/ember-tutorial-basic-app)

> Once done, follow the instructions below...

---

### Create thumbnails service

- Type the following to generate a new service

```sh
ember g service youtube-thumbnails
```

- Open *app/services/youtube-thumbnails.js* and replace the contents with the following 

```javascript
import Service from '@ember/service';
import Cookies from 'ember-cli-js-cookie';

export default Service.extend({

  loading: false,

  watchUrl: "https://www.youtube.com/watch?v=",

  imageUrl: "https://img.youtube.com/vi",

  id: null,

  init() {
    this._super(...arguments);
    this.set("id", Cookies.get('ytid') || "lVTbAT61ojY")
  },

  setId(ytid) {
    this.set("id", ytid)
    Cookies.set('ytid', ytid);
  },

  setLoading(loading) {
    this.set("loading", loading)
  }

});
```
---

### Create thumbnail item component

- Type the following to generate a new component

```sh
ember g component item-thumbnail
```

- Open *app/components/item-thumbnail.js* and replace the contents with the following 

```javascript
import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from "@ember/service";

export default Component.extend({ 

  thumbnail: inject("youtube-thumbnails"),

  filetype: "jpg",

  imageUrl: computed('ytid', 'size', function() {
    return this.thumbnail.imageUrl + "/" + this.ytid + "/" + this.size + "." + this.filetype;
  }),

  downloadUrl: computed('ytid', 'size', function() {
    return "download.php" + "?ytid=" + this.ytid + "&size=" + this.size;
  }),

  filename: computed('ytid', 'size', function() {
    return this.ytid + "_" + this.size + "." + this.filetype;
  })

});
```

- Open *app/templates/components/item-thumbnail.hbs* and replace the contents with the following 

```hbs
<div class="item-thumbnail">

  {{! IMAGE }}
  <a href={{downloadUrl}} target="_blank" download={{filename}}>
    <img class="img-thumbnail rounded-0" src={{imageUrl}}>
  </a>

  <div class="py-2">  

    {{! TITLE }}
    <h5 class="font-weight-bold text-uppercase mb-0">{{title}}</h5>

    {{! LINK }}
    <p>
      <a href={{imageUrl}} target="_blank">{{imageUrl}}</a>
    </p>

  </div>
  
</div>
```
---

### Create thumbnail list component

- Type the following to generate a new component

```sh
ember g component list-thumbnails
```

- Open *app/components/list-thumbnails.js* and replace the contents with the following 

```javascript
import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({

  thumbnail: inject("youtube-thumbnails")  
  
});

```

- Open *app/templates/components/list-thumbnails.hbs* and replace the contents with the following 

```hbs
<div class="card border-0 bg-white">
  <div class="card-body">

    {{#if thumbnail.loading}}

      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>

    {{else}}

      {{! ROW OF 1 THUMBNAILS }}
      <div class="row mb-2 justify-content-md-center">
        
        {{! THUMBNAIL - 1 }}
        <div class="col-sm-12 col-md-10 col-md-auto">
          {{item-thumbnail title="1280x720" ytid=thumbnail.id size="maxresdefault"}} 
        </div>

      </div>

      {{! ROW OF 2 THUMBNAILS }}
      <div class="row mb-2 align-items-center">

        {{! THUMBNAIL - 2 }}
        <div class="col-sm-12 col-md-6">
          {{item-thumbnail title="480x360" ytid=thumbnail.id size="0"}}
        </div>
        
        {{! THUMBNAIL - 1 }}
        <div class="col-sm-12 col-md-6">
          {{item-thumbnail title="320x180" ytid=thumbnail.id size="mqdefault"}}
        </div>            

      </div>
      
      {{! ROW OF 4 THUMBNAILS }}
      <div class="row">

        {{! THUMBNAIL - 1 }}
        <div class="col-sm-12 col-md-3">
          {{item-thumbnail title="120x90" ytid=thumbnail.id size="default"}}
        </div>
        
        {{! THUMBNAIL - 1 }}
        <div class="col-sm-12 col-md-3">
          {{item-thumbnail title="120x90" ytid=thumbnail.id size="1"}}
        </div>

        {{! THUMBNAIL - 2 }}
        <div class="col-sm-12 col-md-3">
          {{item-thumbnail title="120x90" ytid=thumbnail.id size="2"}}
        </div>            

        {{! THUMBNAIL - 3 }}
        <div class="col-sm-12 col-md-3">
          {{item-thumbnail title="120x90" ytid=thumbnail.id size="3"}}
        </div>

      </div>

    {{/if}}

  </div>
</div>
```
---

### Create form component

- Type the following to generate a new component

```sh
ember g component form-youtube
```

- Open *app/components/form-youtube.js* and replace the contents with the following 

```javascript
import Component from '@ember/component';
import { inject } from "@ember/service";

export default Component.extend({

  thumbnail: inject("youtube-thumbnails"),

  query: "",

  placeholder: "",

  loading: false,
  formError: false,
  errorMessage: "",

  init() {
    this._super(...arguments);
    this.set("placeholder", `https://www.youtube.com/watch?v=${this.thumbnail.id}` )
  },

  actions: {
    
    findThumbnails() {

      this.setProperties({
        formError: false,
        errorMessage: ''
      });

      if (!this.query) {
        return;
      }

      const match = this.query.split(this.thumbnail.watchUrl);
      if (match.length < 2) {
        this.setProperties({
          formError: true,
          errorMessage: 'Not a valid youtube url'
        });
        return;
      }

      const ytid = match[1];
      if (ytid.length < 11) {
        this.setProperties({
          formError: true,
          errorMessage: 'Not a valid youtube url'
        });
        return;
      }

      const _self = this;

      // show spinny loader
      _self.thumbnail.setLoading(true);
      setTimeout(function(){
        _self.thumbnail.setId(ytid);
        _self.thumbnail.setLoading(false);
      },500)      

    },

    clearErrors() {

      this.setProperties({
        formError: false,
        errorMessage: ''
      });

    }
  }

});
```

- Open *app/templates/components/form-youtube.hbs* and replace the contents with the following 

```hbs
<div class="form-youtube">  
  
  {{! YOUTUBE FORM }}
  <form autocomplete="off" {{action "findThumbnails" on="submit"}}>   
    
    <div class="input-search position-relative m-auto shadow-sm form-group">
     
      {{! INPUT QUERY }}
      {{input key-press=(action "clearErrors") value=query placeholder=placeholder class="form-control w-100 px-3 py-4 border-light" classBinding="formError:is-invalid"}}
      
      {{! ERROR MESSAGE }}
      {{#if formError}}
        <div class="invalid-tooltip">{{errorMessage}}</div>
      {{/if}}
      
      {{! ICON / Button }}
      <div class="position-absolute top right mt-2 mr-2 pt-1">
        <button class="btn btn-transparent p-0" type="submit">
          {{fa-icon "youtube" prefix="fab" size="2x"}}
        </button>
      </div>

    </div>
    
    {{! SEARCH BUTTON }}
    <div class="buttons p-4">
      <button type="submit" class="btn btn-light mx-1 mb-3 text-muted font-weight-bold">Find Thumbnails</button>
    </div>

  </form>
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
          <div>Youtube</div>
          <small>Thumbnail Finder</small>
        </h1>
        
        {{! DESCRIPTION }}
        <p>Just enter a Youtube link below to find all thumbnails!</p> 

        {{! SEARCH }}
        {{form-youtube}}

      </div>
    </div>
  </div>

  {{! LIST }}
  <div class="container-fluid border-top text-center px-0 pt-2 pb-5 bg-white">
    <div class="container">
      {{list-thumbnails}}
    </div> 
  </div>

</main>
```
---


### Create **php** download script

- Create a new file *public/download.php* and replace the contents with the following 

```php
<?php

  // inputs
  $ytid = $_GET["ytid"];
  $size = $_GET["size"];

  // image variables
  $imageUrl = "https://img.youtube.com/vi";
  $filetype = "jpg";

  // build image url
  $imageUrl = $imageUrl . "/" . $ytid . "/" . $size . "." . $filetype;

  // fetch image
  $image = file_get_contents($imageUrl);
  
  // return the image
  header('Content-type: image/jpeg');
  echo $image;

?>
```
---

That's it 👍

- Type `ember serve` to run the app.

Your app will be running at: [http://localhost:4200](http://localhost:4200)

---

- [Demo Site](https://clarkeanimation.com/apps/ember/youtube-thumbnails/)
- [Source Code](https://www.github.com/clarkeadg)
