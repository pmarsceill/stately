---
title: UI Components
layout: page-two-col
parent: Docs
---

# UI Components

<p class="text-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius officiis reprehenderit velit quisquam eveniet id, ipsa vitae sit. Quo praesentium nihil laudantium excepturi possimus corporis illum ab, iste voluptatum doloremque.</p>

## Form Components

### Buttons

<div class="code-example border rounded-1">

{% highlight html %}
<p>
  <a href="#" class="btn">Link Button</a>
  <a href="#" class="btn btn-blue">Blue Link Button</a>
</p>

<p class="f3">
  <button class="btn">Big Button</button>
</p>

<p class="f3 text-serif">
  <button class="btn">Big Serif Button</button>
</p>

<p>
  <a href="#" class="btn btn-no-shadow">Link button with no shadow</a>
</p>
{% endhighlight %}

  <div class="border-top p-3">
    <p>
      <a href="#" class="btn">Link Button</a>
      <a href="#" class="btn btn-blue">Blue Link Button</a>
    </p>

    <p class="f3">
      <button class="btn">Big Button</button>
    </p>

    <p class="f3 text-serif">
      <button class="btn">Big Serif Button</button>
    </p>

    <p>
      <a href="#" class="btn btn-no-shadow">Link button with no shadow</a>
    </p>
  </div>
</div>

### Inputs

#### Text inputs

<div class="code-example border rounded-1">

{% highlight html %}
<p class="text-small">
  <input type="text" class="form-input mr-1"> <button class="btn" type="submit">Send it</button>
</p>

<p>
  <input type="text" class="form-input mr-1" placeholder="Placeholder text"> <button class="btn btn-no-shadow" type="submit">Send it</button>
</p>

<p class="f3">
  <input type="text" class="form-input mr-1"> <button class="btn btn-blue" type="submit">Send it</button>
</p>

{% endhighlight %}

  <div class="border-top p-3">
    <p class="text-small">
      <input type="text" class="form-input mr-1"> <button class="btn" type="submit">Send it</button>
    </p>

    <p>
      <input type="text" class="form-input mr-1" placeholder="Placeholder text"> <button class="btn btn-no-shadow" type="submit">Send it</button>
    </p>

    <p class="f3">
      <input type="text" class="form-input mr-1"> <button class="btn btn-blue" type="submit">Send it</button>
    </p>
  </div>
</div>

---

## Warnings and notices

### Global info bar

Turn on the info bar by setting `info_bar: true` in your `config.yml` file. Customize the text using the `info_bar_text` variable. See [configuration](../1-configuration/) for more information.

<div class="code-example border rounded-1">
{% highlight yaml %}
## Info bar settings
info_bar: true # Bar at the top of all pages.
info_bar_text: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a>
{% endhighlight %}

  <div class="border-top p-3">
    <div class="bg-darkest px-4">
      <p class="mb-0 text-white text-small">:us: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a></p>
    </div>
  </div>
</div>

### Flash messages

Uses Primer’s Alert module, see [Primer Alerts](http://primercss.io/alerts/) for detailed documentation.

#### Notice message

Used for informative messages at the page level.

<div class="code-example border rounded-1">

{% highlight html %}
<div class="flash">
  Flash message goes here.
</div>
{% endhighlight %}

  <div class="border-top p-3">
    <div class="flash">
      Notice message goes here.
    </div>
  </div>
</div>

#### Warning message

Used for warning messages at the page level.

<div class="code-example border rounded-1">

{% highlight html %}
<div class="flash flash-warn">
  Warning message goes here.
</div>
{% endhighlight %}

  <div class="border-top p-3">
    <div class="flash flash-warn">
      Warning message goes here.
    </div>
  </div>
</div>

#### Error / severe message

Used for error / severe messages at the page level.

<div class="code-example border rounded-1">

{% highlight html %}
<div class="flash flash-error">
  Warning message goes here.
</div>
{% endhighlight %}

  <div class="border-top p-3">
    <div class="flash flash-error">
      Error message goes here.
    </div>
  </div>
</div>

---

## Downloads

### Downloadable Documents & Forms
<div class="code-example border rounded-1">

{% highlight html %}
<p>
  <a href="#" class="link-download">Download this document</a>
</p>

<a href="#" class="link-download d-block">Download this document <span class="text-small text-gray-light no-underline d-block">30KB PDF</span></a>

<a href="#" class="link-download link-download-form d-block">Download this form <span class="text-small text-gray-light no-underline d-block">30KB PDF - Due by 12/31/2017</span></a>
{% endhighlight %}

  <div class="border-top p-3">
    <p>
      <a href="#" class="link-download">Download this document</a>
    </p>
    <a href="#" class="link-download d-block">Download this document <span class="text-small text-gray-light no-underline d-block">30KB PDF</span></a>
    <a href="#" class="link-download link-download-form d-block">Download this form <span class="text-small text-gray-light no-underline d-block">30KB PDF - Due by 12/31/2017</span></a>
  </div>
</div>

---

## Code

### Inline code

<div class="code-example border rounded-1">

{% highlight markdown %}
{% raw %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et `inline code tag` dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
{% endraw %}
{% endhighlight %}

<div class="border-top p-3">

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <code>inline code tag</code> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

</div>
</div>

### Code blocks

<div class="code-example border rounded-1">
  {% highlight liquid %}
    {% raw %}
    {% highlight json %}
    {
      "name": "stately",
      "version": "1.0.0",
      "description": "A Jekyll theme for government.",
      "main": "index.html",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/pmarsceill/stately.git"
      },
      "keywords": [
        "Jekyll",
        "Government",
        "GitHub",
        "GitHub Pages"
      ],
      "author": "Patrick Marsceill",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/pmarsceill/stately/issues"
      },
      "homepage": "https://github.com/pmarsceill/stately#readme",
      "devDependencies": {
        "primer-base": "^0.4.0",
        "primer-layout": "^0.3.0",
        "primer-support": "^1.0.0",
        "primer-utilities": "^2.0.0",
        "primer-alerts": "^0.4.0"
      }
    }
    {% endhighlight %}
    {% endraw %}
  {% endhighlight %}


  <div class="border-top p-3">

  {% highlight json %}
  {
    "name": "stately",
    "version": "1.0.0",
    "description": "A Jekyll theme for government.",
    "main": "index.html",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/pmarsceill/stately.git"
    },
    "keywords": [
      "Jekyll",
      "Government",
      "GitHub",
      "GitHub Pages"
    ],
    "author": "Patrick Marsceill",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/pmarsceill/stately/issues"
    },
    "homepage": "https://github.com/pmarsceill/stately#readme",
    "devDependencies": {
      "primer-base": "^0.4.0",
      "primer-layout": "^0.3.0",
      "primer-support": "^1.0.0",
      "primer-utilities": "^2.0.0",
      "primer-alerts": "^0.4.0"
    }
  }
  {% endhighlight %}

  </div>
</div>
