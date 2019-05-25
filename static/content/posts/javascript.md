---
layout: post
author: Ghost
title: Javascript
date: 2019-05-25T04:25:06.044Z
image: ../img/9URw9LasJ5E_maxresdefault.jpg
tags:
  - tutorials
---
### Query Selectors
```js
document.body.getElementsByTagName()
document.getElementsByClassName()
document.getElementById()
document.querySelector()
document.querySelectorAll()

function getElementsByClassName(key) {
  var results = [];
  var getElements = function(children) {
    for(var i=0;i<children.length;i++) {
      if (children[i].className.contains(key)) {
        results.push(children[i]);
      }
      getElements(children[i].children);
    }
  }
  getElements(document.body.children);
  return results;
}
```

### CSS properties
```js
<element>.style.<properyName> = "propertyValue"

## Add/Remove CSS class
var addClass = function(element, className) {
    if(element.className.indexOf(classname) != -1 ) return;
    if(element.className != '' ) className = ' '+className;
    element.className+= className;
}

var removeClass = function(element, className) {
    element.className = element.className.replace(new RegExp('(?:^|s)' + className + '(?!S)'), '');
}
```

### Attributes
```js
<element>.getAttribute()
<element>.setAttribute()
```

### Navigating the DOM Tree
```js
<element>.childNodes
<element>.parentNode
<element>.firstChild
<element>.lastChild
<element>.previousSibling
<element>.nextSibling
```

### Creating new elements
```js
document.createElement()
document.createTextNode()
```

### Changing the document
```js
document.body.appendChild()
document.body.replaceChild()
document.body.insertBefore()
```

### Element Layout
```js
<element>.offsetWidth
<element>.offsetHeight
<element>.clientWidth
<element>.clientHeight
<element>.getBoundingClientRect()
```

### Current scroll position
```js
pageXOffset
pageYOffset
```

### Event Listeners
```js
<element>.addEventListener("click",function(e){})
<element>.removeEventListener("click", <eventListenerName>);
<event>.target
<event>.preventDefault()
<event>.stopPropagation()
```

### Arrays
```js
Array.forEach()
Array.push()
Arrar.pop()
Array.filter()
Array.indexOf()
Array.length
```

### Objects
```js
Object.create(null)
Object.getPrototypeOf()
Object.setPrototypeOf()
```

### Meta Code
```js
var myFunction = new Function("arg1,arg2", "return arg1 + arg2;");
```

### Ajax
```js
function ajax(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function() {
    if (req.status < 400)
      callback(req.responseText);
  });
  req.send(null);
}
```

### Animations
```js
function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
```

### Extend
```js
Object.prototype.extend = function(obj) {
   for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
         this[i] = obj[i];
      }
   }
};
```

### Loops
```js
arr.forEach(function(){
  
});

for(var i in obj) {
  
}

for(var i=0,c=arr.length;i<c;i++) {
  
}

for(var i=0,c=arr.length;i<c;i++) {
  for(var j=0,k=arr.length;j<k;j++) {
    
  }
}
```

### Dependency Injection
```js
(function(module){
  
}(Module))
```

