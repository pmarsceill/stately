---
title: UI Components
layout: page-two-col
parent: Docs
---

# UI Components
{:.no_toc}

From forms, to alerts, to information notices, Stately comes with a set of UI components that would be useful for a variety of Government website applications.
{: .text-intro }

* TOC
{:toc}

## Dependancies

Stately is built on top of Primer CSS. Before attempting to write custom style  overrides for your site, it may be helpful to familiarize yourself with these components from Primer, which might eliminate the need for more CSS and are included with Stately.

-   [primer-base](https://github.com/primer/primer-base/tree/master/lib)
-   [primer-layout](https://github.com/primer/primer-layout/tree/master/lib)
-   [primer-support](https://github.com/primer/primer-support/tree/master/lib)
-   [primer-utilities](https://github.com/primer/primer-utilities/tree/master/lib)
-   [primer-alerts](https://github.com/primer/primer-alerts/tree/master/lib)

## Form Components

Stately's form components are inherited from [Primer][bcb0a655], with some stylistic overrides that allow for better text alignment on inputs and buttons as well as different button styles.

  [bcb0a655]: http://primercss.io/forms/ "Primer‘s form documentation"

### Buttons

<div class="code-example border rounded-1">

{% highlight html %}
<p>
  <a href="#" class="btn">Link Button</a>
  <a href="#" class="btn btn-blue">Blue Link Button</a>
</p>

<p class="text-large">
  <button class="btn">Big Button</button>
</p>

<p class="text-large text-serif">
  <button class="btn">Big Serif Button</button>
</p>

<p>
  <button class="btn btn-raise-hover">Raise button on hover</button>
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

    <p class="text-large">
      <button class="btn">Big Button</button>
    </p>

    <p class="text-large text-serif">
      <button class="btn">Big Serif Button</button>
    </p>

    <p>
      <button class="btn btn-raise-hover">Raise button on hover</button>
    </p>

    <p>
      <a href="#" class="btn btn-no-shadow">Link button with no shadow</a>
    </p>
  </div>
</div>

### Text inputs

To allow for buttons to align with form inputs at any text size, use the `form-input` class on your text-inputs and a parent [utility class](../4-utilities/) to scale the text size for both components:

<div class="code-example border rounded-1">

{% highlight html %}
<p class="text-small">
  <input type="text" class="form-input mr-1"> <button class="btn" type="submit">Send it</button>
</p>

<p>
  <input type="text" class="form-input mr-1" placeholder="Placeholder text"> <button class="btn btn-no-shadow" type="submit">Send it</button>
</p>

<p class="text-large">
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

    <p class="text-large">
      <input type="text" class="form-input mr-1"> <button class="btn btn-blue" type="submit">Send it</button>
    </p>
  </div>
</div>

### Radio buttons and checkboxes

<div class="code-example border rounded-1">

{% highlight html %}
<form>
  <p>
    <label>
      <input type="checkbox"> Remember me
    </label>
  </p>

  <p>
    <label class="mr-2">
      <input type="radio" id="herp" name="herpderp" checked> Herp
    </label>
    <label>
      <input type="radio" id="derp" name="herpderp"> Derp
    </label>
  </p>

  <p>
    <button class="btn btn-blue" type="submit">Submit the form</button>
  </p>
</form>

{% endhighlight %}

  <div class="border-top p-3">
    <form>
      <p>
        <label>
          <input type="checkbox"> I’d like to duel
        </label>
      </p>

      <p>
        <label class="mr-2">
          <input type="radio" id="Hamilton" name="duel" checked> Hamilton
        </label>
        <label>
          <input type="radio" id="Burr" name="duel"> Burr
        </label>
      </p>

      <p>
        <button class="btn btn-blue" type="submit">Submit the form</button>
      </p>
    </form>
  </div>
</div>

### Select menus

For style select menus, wrap the `select` element in a `select-wrap` class. To make sure the `select` scales properly with the button apply the `form-input` class to it.

<div class="code-example border rounded-1">

{% highlight html %}
<form>
  <p class="text-small">
    <span class="select-wrap">
      <select class="form-select form-input mr-1">
        <option>Choose an option</option>
        <option>Life</option>
        <option>Liberty</option>
        <option>The pursuit of happiness</option>
      </select>
    </span>
    <button class="btn btn-blue" type="submit">Submit the form</button>
  </p>
  <p>
    <span class="select-wrap">
      <select class="form-select form-input mr-1">
        <option>Choose an option</option>
        <option>Life</option>
        <option>Liberty</option>
        <option>The pursuit of happiness</option>
      </select>
    </span>
    <button class="btn btn-blue" type="submit">Submit the form</button>
  </p>
  <p class="text-large">
    <span class="select-wrap">
      <select class="form-select form-input mr-1">
        <option>Choose an option</option>
        <option>Life</option>
        <option>Liberty</option>
        <option>The pursuit of happiness</option>
      </select>
    </span>
    <button class="btn btn-blue" type="submit">Submit the form</button>
  </p>
</form>
{% endhighlight %}

  <div class="border-top p-3">
    <form>
      <p class="text-small">
        <span class="select-wrap">
          <select class="form-select form-input mr-1">
            <option>Choose an option</option>
            <option>Life</option>
            <option>Liberty</option>
            <option>The pursuit of happiness</option>
          </select>
        </span>
        <button class="btn btn-blue" type="submit">Submit the form</button>
      </p>
      <p>
        <span class="select-wrap">
          <select class="form-select form-input mr-1">
            <option>Choose an option</option>
            <option>Life</option>
            <option>Liberty</option>
            <option>The pursuit of happiness</option>
          </select>
        </span>
        <button class="btn btn-blue" type="submit">Submit the form</button>
      </p>
      <p class="text-large">
        <span class="select-wrap">
          <select class="form-select form-input mr-1">
            <option>Choose an option</option>
            <option>Life</option>
            <option>Liberty</option>
            <option>The pursuit of happiness</option>
          </select>
        </span>
        <button class="btn btn-blue" type="submit">Submit the form</button>
      </p>
    </form>
  </div>
</div>

## Warnings and notices

### Global info bar

Turn on the info bar by setting `info_bar: true` in your site’s `_config.yml` file. Customize the text using the `info_bar_text` variable. See [configuration](../1-configuration/) for more information.

<div class="code-example border rounded-1">
{% highlight yaml %}
## Info bar settings
info_bar: true # Bar at the top of all pages.
info_bar_text: This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a> <img class="emoji" title=":us:" alt=":us:" src="https://assets.github.com/images/icons/emoji/unicode/1f1fa-1f1f8.png" height="20" width="20" align="absmiddle">
{% endhighlight %}

  <div class="border-top p-3">
    <div class="bg-darkest px-4">
      <p class="mb-0 text-white text-small">This is not an offical site of the <a href="//usa.gov" class="text-white text-underline">U.S. Government</a> :us:</p>
    </div>
  </div>
</div>

### Flash messages

Stately extends Primer’s Alert module, see [Primer Alerts](http://primercss.io/alerts/) for detailed documentation.

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

## Downloads

The special download button includes an icon to draw attention to downloading a PDF of document. Use utility classes to style and format any metadata:

### Downloadable Documents & Forms
<div class="code-example border rounded-1">

{% highlight html %}
<p>
  <a href="#" class="link-download">Download this document</a>
</p>
<p>
  <a href="#" class="link-download">Download this document <span class="text-small text-gray-light no-underline d-block no-underline">- 30KB PDF</span></a>
</p>
<p>
  <a href="#" class="link-download link-download-form"><span class="d-block width-full">Download this form</span><span class="text-small text-gray-light d-block width-full">30KB PDF - Due by 12/31/2017</span></a>
</p>
{% endhighlight %}

  <div class="border-top p-3">
    <p>
      <a href="#" class="link-download">Download this document</a>
    </p>
    <p>
      <a href="#" class="link-download">Download this document <span class="text-small text-gray-light d-block width-full">30KB PDF</span></a>
    </p>
    <p>
      <a href="#" class="link-download link-download-form">Download this form <span class="text-small text-gray-light d-block width-full">30KB PDF - Due by 12/31/2017</span></a>
    </p>
  </div>
</div>

---

## Code

### Inline code

<div class="code-example border rounded-1">

{% highlight markdown %}
<!-- Markdown example: -->
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
    {% comment %}
    Markdown / Liquid example:
    {% endcomment %}

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
